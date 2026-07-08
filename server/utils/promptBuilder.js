export const buildPrompt = (summary) => {
  return `
You are an expert personal financial advisor.

Analyze the user's financial data and provide practical, realistic, and actionable advice.

Financial Summary:

• Total Income: ₹${summary.totalIncome}
• Total Expense: ₹${summary.totalExpense}
• Current Balance: ₹${summary.balance}
• Total Transactions: ${summary.totalTransactions}

Category-wise Expenses:

${Object.entries(summary.categoryWiseExpense)
  .map(([category, amount]) => `• ${category}: ₹${amount}`)
  .join("\n")}

Instructions:

- Respond ONLY with valid JSON.
- Do NOT use markdown.
- Do NOT wrap the response inside \`\`\`.
- Do NOT explain your reasoning.
- Keep every response concise.
- The financial score must be between 0 and 100.
- Recommendations should be specific and actionable.

Return exactly this structure:

{
  "financialHealth": "",
  "score": 0,
  "spendingAnalysis": "",
  "savingsRecommendation": "",
  "highestExpenseCategory": "",
  "highestExpenseAmount": 0,
  "smartAlerts": [
    "",
    ""
  ],
  "personalizedTips": [
    "",
    "",
    ""
  ],
  "nextMonthGoal": ""
}
`;
};