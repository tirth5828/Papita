import mongoose from "mongoose";
const Schema = mongoose.Schema
const QuestionSchema = new mongoose.Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        question: {
            type:String
        },
        answer: {
            type: Array,
            default:[]
        },
    }, { timestamps: true }
);

export default mongoose.model("Question", QuestionSchema);