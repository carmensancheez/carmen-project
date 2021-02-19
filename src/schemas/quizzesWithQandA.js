const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/quizzes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const questionsSchema = new mongoose.Schema({
    title: { type: String, required: true },
});

const quizzesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    questions: { type: [questionsSchema] },
});

export const Quizz = mongoose.model("quizz", quizzesSchema, "quizz");