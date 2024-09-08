import express from "express";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChat.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

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

// app.get("/api/test" , ClerkExpressRequireAuth() , (req, res) => {
//   const userId = req.auth.userId;
//   res.send("successfully send")
//   console.log(userId)
// })

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.post("/api/chats", ClerkExpressRequireAuth(), async (req, res) => {
  const { text } = req.body;
  const userId = req.auth.userId;
  try {
    // Create a new chat
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });
    const saveChat = await newChat.save();

    // check if userchat exists
    const userChats = await UserChats.findOne({ userId: userId });

    // IF USERCHAT DOES NOT EXIST CREATE NEW ONE AND ADD CHAT
    if (!userChats) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: saveChat._id,
            title: text.substring(0, 40),
          },
        ],
      });
      await newUserChats.save();
    } else {
      // IF USERCHAT EXISTS PUSH THE CHAT TO EXISTING ARRAY
      await UserChats.updateOne(
        {
          userId: userId,
        },
        {
          $push: {
            chats: {
              _id: saveChat._id,
              title: text.substring(0, 40),
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

app.get("/api/userChat", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const userChat = await UserChats.find({ userId });
    res.status(200).send(userChat[0].chats);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error creating chat");
  }
});
app.get("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;
  try {
    const chat = await Chat.find({_id:req.params.id, userId });
    res.status(200).send(chat);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error creating chat");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
