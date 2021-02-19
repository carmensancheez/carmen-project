const quizzesWithQAndA = {
    1: [
        {
            id: 34,
            question: "Que es next JS ?",
            answers: ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"],
        },
        {
            id: 35,
            question: "Que es SSR ?",
            answers: ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"],
        },
    ],
    2: [
        {
            id: 36,
            question: "Que es MongoDB ?",
            answers: ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"],
        },
        {
            id: 30,
            question: "Que es un index ?",
            answers: ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"],
        },
    ],
};

const quizzes = [
    {
        id: 1,
        name: "Quiz 1",
        progress: "86",
    },
    {
        id: 2,
        name: "Quiz 2",
        progress: "76",
    },
    {
        id: 3,
        name: "Quiz 3",
        progress: "36",
    },
];

export const getQuizzesWithQnA = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(quizzesWithQAndA);
        }, 1000);
    });
};

export const getQuizzes = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(quizzes);
        }, 1000);
    });
}; 