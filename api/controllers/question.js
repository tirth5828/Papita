import Question from "../models/Question.js";
import { createError } from "../utils/error.js";

// add questions
export const addques = async (req, res, next) => {
    try {
        const newQues = new Question({
            ...req.body,
             owner: req.params.id
        })

        await newQues.save()
        res.status(200).send("Question has been created.")

    }
    catch (err) {
        next(err);
    }
};

//delete question
export const deleteQuestion = async (req, res, next) => {
    try {
        await Question.findByIdAndDelete(req.params.id)
        res.status(200).json("Question has been deleted!");
    }
    catch (err) {
        next(err)
    }
}

// get question
export const getQuestion = async(req, res, next) =>{
    try {
        const ques = await Question.findById(req.params.id)
        res.status(200).json(ques);
    }
    catch (err) {
        next(err)
    }
}

// get all questions
export const getquestions = async (req, res, next) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    }
    catch (err) {
        next(err);
    }
}

// update answer
export const updateAnswer = async (req, res, next) => {
    try {
        const answer = await Question.findById(req.params.id);

        // console.log(answer)
        var answers = answer.answer;
        answers.push(req.body.answer);
        answer.answer = answers;
        await answer.save();
        res.status(200).json(answers);
    }
    catch (err) {
        next(err);
    }
}