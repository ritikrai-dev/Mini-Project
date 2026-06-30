import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function test() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hello",
  });

  console.log(response.text);
}

test().catch(console.error);