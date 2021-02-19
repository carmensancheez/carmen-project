import { Quiz } from '../../src/schemas/quizzesSchema';

export default (req, res) => {

    const { method } = req;

    switch (method) {
        case 'GET':
            Quiz.find({})
                .then((result) => {
                    res.status(200).json({ result })
                })
                .catch(err => console.error(err))
            break
            case 'POST':
                const newQuizz = new Quiz(req.body); // Object created from req.body
                newQuizz.save().then((result) => {    // Insert Object in database
                    res.status(200).json({ message: "Quizz created", result });
                }).catch(err => console.error(err));
                break
            default:
                res.status(400).json({ success: false })
                break
    
        }
    }