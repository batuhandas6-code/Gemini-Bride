import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "Gemini Bridge"
  });
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "message gerekli"
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message
    });

    res.json({
      success: true,
      response: response.text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Gemini API çağrısı başarısız."
    });
  }
});

app.listen(port, () => {
  console.log(`Gemini Bridge ${port} üzerinde çalışıyor.`);
});
