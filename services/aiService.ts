import { GoogleGenAI } from "@google/genai";
import { Dynasty } from "../types";

export const generateHistoryResponse = async (
  question: string,
  dynasty: Dynasty,
  history: { role: string; text: string }[]
) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
      你是一位博学多才的中国古代历史学家，专门研究${dynasty.name}朝。
      你的语言风格应当典雅、半文半白，体现历史的厚重感，但要保证现代人能读懂。

      当前上下文：
      朝代：${dynasty.name}
      时期：${dynasty.period}
      都城：${dynasty.capital}

      请回答用户的提问。如果问题超出该朝代范围，请礼貌地将话题引回本朝。
      回答应简练、准确，字数控制在300字以内。
    `;

    const model = 'gemma-4-26b-a4b-it';

    // Format history for Gemini
    // Note: @google/genai chat history format might differ slightly based on method used,
    // but generating content with a prompt chain is stateless unless we use chat.
    // Here we use generateContent with a constructed prompt for simplicity in this specific context
    // or use the Chat interface if we want multi-turn.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: question });
    return result.text;

  } catch (error) {
    console.error("AI Service Error:", error);
    return "（太史公提笔沉思良久，似有难言之隐，请检查阁下的‘通关文牒’（API Key）是否完备。）";
  }
};
