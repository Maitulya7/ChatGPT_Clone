import express from "express";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import cors from "cors";
dotenv.config();



const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL}));

app.use(express.json());

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });

app.get("/api/upload", (req,res)=>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
