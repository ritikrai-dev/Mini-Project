import { generateInsights } from "../services/aiService.js";

export const getInsights = async (req, res) => {
  try {
    const insights = await generateInsights(req.user._id);

    return res.status(200).json({
      success: true,
      insights,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};