import express from "express";
import protect from "../middleware/authMiddleware.js";
import { exportJSON , exportCSV , exportExcel , exportPDF} from "../controllers/reportController.js";

const router = express.Router();

router.get("/json", protect, exportJSON);
router.get('/csv',protect,exportCSV);
router.get("/excel",protect,exportExcel);
router.get("/pdf",protect,exportPDF);

export default router;