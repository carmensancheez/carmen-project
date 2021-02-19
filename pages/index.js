import React, {useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Avatar, Heading, Box, Button, InputGroup,
  InputLeftElement, Icon, FormControl, Input,
  Flex, Grid, GridItem, Center, Image  } from "@chakra-ui/react"
import { HiUser } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CircularProgress } from '@material-ui/core';
import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';
import  AlertMessage from '../utils/AlertMessage';

export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== "123") {
       setError("Invalid Username or Password")
    } else {
      setError("")
    }
  }
  
  const borderStyle = {
    border: "1px",
  }
  return (
    // className={styles.container}
    <div >
      <Head>
        <title>Quizzes</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* className={styles.main}  */}
      <main >
        <Grid templateColumns="repeat(9, 1fr)" gap={15} h="98vh" m={4}>
          <GridItem colSpan={[4,4,5,6]}>
            <Center w="90%" h="90%">
              <Image boxSize={["80%", "45%", "80%", "95%"]} h="auto" src="picture.jpeg" fit="fill" align="right center"/>
            </Center>
          </GridItem>
          <GridItem colSpan={[5,5,4,3]}>
            <Box>
              <Flex direction="row" justifyContent="flex-end" mt={8} mr={10} mb={8}>
                <ColorModeSwitcher style={{ border: "1px solid"}} />
              </Flex>
            </Box>
          <Box>
          </Box>
            <Box mt={5} p={17}>
              <form onSubmit={handleSubmit}>  
                    <Box mr="40px" mt={25}>
                        <FormControl isRequired>
                            { error && <AlertMessage alert={"Error"} message={error} />}
                            <InputGroup border="1px solid" mt={25}>
                                <InputLeftElement children={<Icon as={HiUser} fontSize="1.5rem" name='Username'  aria-label="username"/>}/>
                                <Input type="text" placeholder="Username" isDisabled={submitting}
                                  onChange={event=>setUsername(event.currentTarget.value)}></Input>
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup border="1px solid" mt={25}>
                                <InputLeftElement children={<Icon as={RiLockPasswordLine} fontSize="1.5rem" name='Password'  aria-label="password" />} />
                                <Input type="password" placeholder="Password" isDisabled={submitting}
                                    onChange={event => setPassword(event.currentTarget.value)}></Input>
                            </InputGroup>
                        </FormControl>
                    </Box>
                    <Box align="center">
                        {/* TODO: Crear componente Boton dependiendo del tipo en carpeta UI para un Link  */}
                        <Button  type="submit" mt={6} px={14} size={"lg"} fontSize={"2xl"} _hover={{ boxShadow: 'lg' }}>
                          Login
                        </Button>
                    </Box>
                </form>
            </Box>
            </GridItem>
        </Grid>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
