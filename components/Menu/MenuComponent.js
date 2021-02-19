import React from 'react';
import {Flex, Box, Spacer, Heading} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../utils/ColorModeSwitcher'
import MenuDrawer from './MenuDrawer'

const MenuComponent = () => {


    return (
        <>
            <Flex style={{border:"1px solid"}} borderRadius="lg" width="80vw" mt={4}>
                <Box>
                    <MenuDrawer />
                </Box>
                <Spacer />
                <Heading>Quiz List</Heading>
                <Spacer />
                <Box>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Flex>

        </>
    );
}

export default MenuComponent;