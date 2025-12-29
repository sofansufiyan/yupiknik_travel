
import { GoogleGenAI, Type } from "@google/genai";
import { TRIPS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTripRecommendations = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert travel consultant for YUPIKNIK Open Trip. Based on the user's request: "${userPrompt}", suggest the best trip from our catalog.
      
      Catalog Data:
      ${JSON.stringify(TRIPS.map(t => ({ id: t.id, title: t.title, description: t.description, category: t.category, price: t.price })))}

      Return a short, enthusiastic response in Indonesian that recommends one or two specific trips from the list and explains why they fit. If no trip fits perfectly, suggest the closest one.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "Maaf, saya tidak bisa memberikan rekomendasi saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI kami. Silakan coba lagi nanti.";
  }
};
