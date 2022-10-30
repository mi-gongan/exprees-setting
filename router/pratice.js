import * as practiceController from "../controller/pratice.js";
import express from "express";

const router = express.Router();

router.get("/", practiceController.getPratice);

router.post("/", practiceController.postPratice);

router.put("/:id", practiceController.putPratice);

router.delete("/:id", practiceController.deletePratice);

export default router;
