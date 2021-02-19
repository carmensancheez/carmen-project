import React from 'react';
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
export default function AlertMessage({ alert, message }) {
    return (
        <Box my={4}>
            <Alert altert={alert} borderRadius={4}>
                <AlertIcon />
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </Box>
    );
}