import {
    Icon,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button, useDisclosure, Box, VStack, Divider
} from "@chakra-ui/react";

import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useRef } from 'react';
import { useRouter } from 'next/router'

import { IoMdExit } from 'react-icons/io';
import { FaThList } from 'react-icons/fa';

export default function MenuDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const btnRef = useRef()
    const router = useRouter()

    const quizzes = () => {
        router.push("/quizzes");
    }

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/");
    }

    return (
        <>
            <Box alignItems={"baseline"}>
                <Button as={IconButton}
                    aria-label="Menu"
                    icon={<Icon as={GiHamburgerMenu} />}
                    size="md"
                    variant="outline"
                    ref={btnRef}
                    onClick={onOpen}>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>QUIZZES</DrawerHeader>
                            <DrawerBody>
                                <VStack>
                                    <Button onClick={logout} leftIcon={<IoMdExit />} width="100%">Logout</Button>
                                    <Divider />
                                    <Button onClick={quizzes} leftIcon={<FaThList />} width="100%">Quiz List</Button>
                                    <Divider />
                                    <Divider />
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>
        </>
    )
}
