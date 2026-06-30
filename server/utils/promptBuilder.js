export const buildPrompt = (summary) => {
  return `
You are an expert financial advisor.

Analyze the following financial data:

Total Income: ₹${summary.totalIncome}
Total Expense: ₹${summary.totalExpense}
Current Balance: ₹${summary.balance}
Total Transactions: ${summary.totalTransactions}

Category-wise Expenses:
${Object.entries(summary.categoryWiseExpense)
  .map(([category, amount]) => `${category}: ₹${amount}`)
  .join("\n")}

Provide ONLY these sections:

1. Spending Analysis
2. Savings Recommendation
3. Smart Alerts
4. Personalized Financial Tips

Respond ONLY with valid JSON in this format:

{
  "spendingAnalysis": "",
  "savingsRecommendation": "",
  "smartAlerts": [
    "",
    ""
  ],
  "personalizedTips": [
    "",
    "",
    ""
  ]
}
`;
};