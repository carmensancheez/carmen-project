const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/quizzes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const usersSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

export const Users = mongoose.model("users", usersSchema, "users");