import { Quiz, UserQuizzes } from "../../src/schemas/quizzesSchema";

export default (req, res) => {
    const {method} = req;

    switch (method) {
        case 'GET': {
            Quiz.find({id: req.query.id})
            .then((result) => {
                res.status(200).json({ result })
            })
            .catch(err => console.error(err))
            break
        }
        case 'POST':
                const newUserQuiz = new UserQuizzes(req.body); // Object created from req.body
                newUserQuiz.save().then((result) => {    // Insert Object in database
                    res.status(200).json({ message: "Quizz created", result });
                }).catch(err => console.error(err));
                break
            default:
                res.status(400).json({ success: false })
                break
    
    }
}