import express from "express";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChat.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log(
      `Connected to MongoDB | Database name is:${mongoose.connection.name}`
    );
  } catch (error) {
    console.log(error.message);
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.post("/api/chats", async (req, res) => {
  const { userId, text } = req.body;

  try {
    // Create a new chat
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });
    const saveChat = await newChat.save();

    // check if user exists

    const userChats = await UserChats.findOne({ userId: userId });

    // IF USERCHAT DOES NOT EXIST CREATE NEW ONE AND ADD CHAT

    if (!userChats) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: saveChat._id,
            title: text.substring(0, 10),
          },
        ],
      });
      await newUserChats.save();
    } else {
      await UserChats.updateOne(
        {
          userId: userId,
        },
        {
          $push: {
            chats: {
              _id: saveChat._id,
              title: text.substring(0, 10),
            },
          },
        }
      );
    }
    res.status(201).send(newChat._id);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error creating chat");
  }
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
