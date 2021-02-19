import { Box, Center, List, ListItem,  Text, UnorderedList, Heading} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RadioGroupComponent from "../../components/RadioGroupComponent";
// import { getQuizzesWithQnA } from "../../services/quizService";
import MenuComponent from '../../components/Menu/MenuComponent';

const getQuizz = (id) => 
    fetch(`${process.env.API_URL}/quiz/?id=${id}`).then((res) => {
        return res.json()
    });


export async function getServerSideProps({params}) {
    const id = params.id;
    const quizzesWithQAndA = await getQuizz(id);
    return {
        props: {
            quizzesWithQAndA : quizzesWithQAndA.result,
        }
  };
}

const Quiz = ({ quizzesWithQAndA }) => {

    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    useEffect(() => {
        console.log(window);
    }, []);

    const quiz = quizzesWithQAndA;

    const getValue = (quest, answ)=> {
       console.log(`Question: ${quest}  Answer: ${answ}`)
    }

    

    return (
        <>
            {/* <QuizQuestion />
            <Button onClick={() => alert("test")} border="1px solid blue">test</Button> */}
          <Box align="center">
              <MenuComponent></MenuComponent>
              <Center>
                <Box alignItems="center"   w={["200px", "250px", "600px", "800px",]}
                               listStyleType="none" spacing={10} mt={4}>
                    {quiz[0].questions.map((questionsAndAnswers,ansIdx) => {
                        return (
                            <Box key={questionsAndAnswers.ansIdx} mt={10} pb={6} border="2px solid black" borderRadius="lg">
                                 <Heading fontSize="2xl" h="40px" ml={0} mt={[3, 6, 6, 6]} fontWeight="bold"
                                         >{questionsAndAnswers.question}</Heading>
                                <RadioGroupComponent answers={questionsAndAnswers.answers} quest={ansIdx} returnValue={getValue}></RadioGroupComponent>
                            </Box>
                        );
                    })}
                </Box>
                </Center>
          </Box>
        </>
    );
};

export default Quiz;



// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { QuizQuestion } from "../../components/QuizQuestion";
// import { getQuizzesWithQnA } from "../../services/quizzesService";

// export async function getServerSideProps() {
//     const quizzesWithQAndA = await getQuizzesWithQnA();

//     return {
//         props: {
//             quizzesWithQAndA,
//         },
//     };
// }

// const Quiz = ({ quizzesWithQAndA }) => {
//     const router = useRouter();
//     const { id } = router.query;

//     if (!id) {
//         return <div>Loading...</div>;
//     }

//     useEffect(() => {
//         console.log(window);
//     }, []);

//     const quiz = quizzesWithQAndA[id];

//     return (
//         <>
//             <QuizQuestion />
//             <button onClick={() => alert("test")}>test</button>
//             <ul>
//                 {quiz.map((questionsAndAnswers) => {
//                     return (
//                         <li key={questionsAndAnswers.id}>
//                             <p>{questionsAndAnswers.question}</p>
//                             <ol>
//                                 {questionsAndAnswers.answers.map((answer) => (
//                                     <li key={answer}>{answer}</li>
//                                 ))}
//                             </ol>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </>
//     );
// };

// export default Quiz;