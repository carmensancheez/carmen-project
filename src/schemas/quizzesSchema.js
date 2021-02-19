const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const answersSchema = new mongoose.Schema({
    answer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
  });
  
  const questionsSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answers: { type: [answersSchema], required: true },
  });
  
  const quizzesSchema = new mongoose.Schema(
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      questions: { type: [questionsSchema] },
    },
    { timestamps: true }
  );

  const usersSchema = new mongoose.Schema({  // "user"
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  },
  { timestamps: true });

  const questionsAnswersSchema = new mongoose.Schema({
    answerNumber: { type: Number, required: true },
    isCorrect: { type: Boolean, required: true }
  });

  const userQuizDetailSchema = new mongoose.Schema({
    id: { type: mongoose.ObjectId, ref: 'Quiz' },  // ref al id del quiz
    status: { type: String, required: true }, // P/ Progress / C/ Completed
    correctAnswers: { type: Number, required: true },
    userAnswers: { type: [ questionsAnswersSchema], required: true }
  },
    { timestamps: true });
  
  const userQuizzesSchema = new mongoose.Schema({ // "user_quizzes"
    user_id: { type: mongoose.ObjectId, ref: 'User' },  // ref al id del Usuario
    userQuizzes: { type: [userQuizDetailSchema], required: true }
  });

  

  const Quiz = mongoose.models.quizz || mongoose.model("quizz", quizzesSchema, "quizz");
  const User = mongoose.models.user || mongoose.model("user", usersSchema, "user");
  const UserQuizzes = mongoose.models.user_quizzes || mongoose.model("user_quizzes", userQuizzesSchema, "user_quizzes");
  
  export {Quiz, User, UserQuizzes};