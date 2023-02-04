import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {addques, deleteQuestion, getQuestion, getquestions, updateAnswer} from '../controllers/question.js'

const router = express.Router();

// add question
router.post("/:id", addques);

// delete question
router.delete("/:id",  deleteQuestion);

// get question
router.get("/:id", getQuestion)

// get all question
router.get("/", getquestions);

// update answer
router.put("/:id", updateAnswer);

export default router;
