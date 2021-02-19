import Link from "next/link";
import Head from 'next/head';
import MenuComponent from '../components/Menu/MenuComponent';
import {
    Heading, useColorMode, Stack, Button, Box, Avatar, Icon, VStack, 
    InputGroup, InputLeftElement, FormControl, Flex, Input, Grid, GridItem, Center, Image, CircularProgress
} from "@chakra-ui/react";
// import { getQuizzes } from "../services/quizService";
import { useState } from "react";

const getQuizzes = () => 
fetch(`${process.env.API_URL}/${process.env.DB_NAME}`).then((res) => {
        return res.json()
    });

export async function getStaticProps() {
    const quizzesList = await getQuizzes();
    return {
        props: {
            quizzesList: quizzesList.result,
        },
    };
}

const QuizList = ({quizzesList}) => {

    const [quizzes, setQuizzes] = useState(quizzesList ?? []);

    return (
        <>
            <Head>Programming Quiz List</Head>
            <Center>
                <Box align="center" >
                    <MenuComponent></MenuComponent>
                        <Grid gap={6} mt={40} templateColumns="repeat(auto-fit, minmax(240px, 1fr))" >
                            {quizzes.map((quiz) => {
                                return (
                                    <GridItem key={quiz._id}>
                                        <Flex style={{ border: "1px solid" }} p={10} justifyContent="space-between">
                                            <Link href={`/quiz/${quiz.id}`} >{quiz.name}</Link>
                                            <CircularProgress value={quiz.progress}></CircularProgress>
                                        </Flex>
                                        {/* <Flex direction="row" justifyContent="flex-end" mt={8} mr={10} mb={8}>
                                            <ColorModeSwitcher style={{ border: "1px solid" }} />
                                        </Flex> */}
                                    </GridItem>
                                );
                            })}
                        </Grid>
                </Box>
            </Center>
        </>
    );
};

export default QuizList;