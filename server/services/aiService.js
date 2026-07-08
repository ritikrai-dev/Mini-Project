import Transaction from "../models/Transaction.js";
import { GoogleGenAI } from "@google/genai";
import { buildPrompt } from "../utils/promptBuilder.js";

export const generateInsights = async (userId) => {
  try {
    console.log("========== STEP 1 ==========");
    console.log("Fetching Transactions...");

    const transactions = await Transaction.find({ user: userId });

    console.log("Transactions Found:", transactions.length);

    let totalIncome = 0;
    let totalExpense = 0;
    const categoryWiseExpense = {};

    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        totalIncome += transaction.amount;
      } else {
        totalExpense += transaction.amount;

        categoryWiseExpense[transaction.category] =
          (categoryWiseExpense[transaction.category] || 0) +
          transaction.amount;
      }
    });

    const summary = {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
      totalTransactions: transactions.length,
      categoryWiseExpense,
    };

    console.log("========== STEP 2 ==========");
    console.log(summary);

    const prompt = buildPrompt(summary);

    console.log("========== STEP 3 ==========");
    console.log(prompt);

    console.log("========== STEP 4 ==========");
    console.log("Gemini Key:", process.env.GEMINI_API_KEY);

    // Create Gemini client AFTER dotenv has loaded
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    console.log("========== STEP 5 ==========");
    console.log("Calling Gemini...");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    console.log("========== STEP 6 ==========");
    console.log(response);

    const text = response.text;

    console.log("========== STEP 7 ==========");
    console.log(text);

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("========== STEP 8 ==========");
    console.log(cleaned);

    let insights;

try {

    insights = JSON.parse(cleaned);

} catch {

    insights = {
        summary: "Unable to parse AI response.",
        insights: [],
        recommendations: []
    };

}

    return insights;

  } catch (error) {
    console.error("========== AI SERVICE ERROR ==========");
    console.error(error);
    throw error;
  }
};