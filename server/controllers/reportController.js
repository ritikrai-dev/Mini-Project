import Transaction from "../models/Transaction.js";
import { Parser } from "json2csv";
import ExcelJS  from 'exceljs';
import PDFDocument from "pdfkit";


// Export Transactions as JSON

export const exportJSON = async (req, res) => {
  try {

    const transactions = await Transaction.find({
      user: req.user._id,
    });

    const report = {
      generatedAt: new Date(),
      totalTransactions: transactions.length,
      transactions,
    };

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=expense-report.json"
    );

    res.setHeader("Content-Type", "application/json");

    return res.status(200).json(transactions);

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const exportCSV = async (req,res)=>{

    try {
        const transactions = await Transaction.find({
            user : req.user._id
        }).lean(); //lean is mongoes function which gives js object

        // Fields that will come in csv file 
        const data = transactions.map((transaction) => ({
      Type: transaction.type,
      Amount: transaction.amount,
      Category: transaction.category,
      "Payment Method": transaction.paymentMethod,
      Description: transaction.description,
      Date: transaction.date.toISOString().split("T")[0],
    }));

    const fields = [
      "Type",
      "Amount",
      "Category",
      "Payment Method",
      "Description",
      "Date",
    ];

    const parser = new Parser({ fields }); //This tells json2csv the order and names of the columns

    const csv = parser.parse(data);

    res.header("Content-Type", "text/csv");
    res.attachment("expense-report.csv");

    return res.status(200).send(csv);

    }
 catch (error) {
        return res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}

//    Export Transactions as Excel

export const exportExcel = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    }).lean();

    // Createing workbook
    const workbook = new ExcelJS.Workbook();

    // Adding worksheet
    const worksheet = workbook.addWorksheet("Expense Report");

    // Define columns to add in excel
    worksheet.columns = [
      { header: "Type", key: "type", width: 15 },
      { header: "Amount", key: "amount", width: 15 },
      { header: "Category", key: "category", width: 20 },
      { header: "Payment Method", key: "paymentMethod", width: 20 },
      { header: "Description", key: "description", width: 30 },
      { header: "Date", key: "date", width: 20 },
    ];

    // Add rows
    transactions.forEach((transaction) => {
      worksheet.addRow({
        type: transaction.type,
        amount: transaction.amount,
        category: transaction.category,
        paymentMethod: transaction.paymentMethod,
        description: transaction.description,
        date: transaction.date.toISOString().split("T")[0],
      });
    });

    // Make header bold
    worksheet.getRow(1).font = {
      bold: true,
    };

    // Response headers
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=expense-report.xlsx"
    );

    // Send workbook
    await workbook.xlsx.write(res);

    res.end();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Export Transactions as PDF
// @route   GET /api/reports/pdf
// @access  Private

export const exportPDF = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    }).lean();

    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=expense-report.pdf"
    );

    doc.pipe(res);

    // Title
    doc
      .fontSize(22)
      .text("Expense Tracker Report", { align: "center" });

    doc.moveDown();

    doc.fontSize(12);
    doc.text(`Generated On: ${new Date().toLocaleString()}`);
    doc.text(`Total Income: ₹${totalIncome}`);
    doc.text(`Total Expense: ₹${totalExpense}`);
    doc.text(`Current Balance: ₹${balance}`);

    doc.moveDown();

    doc
      .fontSize(16)
      .text("Transactions");

    doc.moveDown(0.5);

    transactions.forEach((transaction, index) => {
      doc
        .fontSize(11)
        .text(
          `${index + 1}. ${transaction.type.toUpperCase()} | ₹${transaction.amount}`
        );

      doc.text(`Category : ${transaction.category}`);
      doc.text(`Payment : ${transaction.paymentMethod}`);
      doc.text(`Description : ${transaction.description}`);
      doc.text(
        `Date : ${new Date(transaction.date).toLocaleDateString()}`
      );

      doc.moveDown();
    });

    doc.end();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};