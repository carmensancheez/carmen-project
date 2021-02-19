import { Box, Flex, Icon, InputAddon, InputGroup, Radio, RadioGroup,  Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ImCheckmark2 } from "react-icons/im";

const RadioGroupComponent = ({ answers, quest, returnValue})=> {
    const [value, setValue] = useState(-1);

    const handleChange = (idx) => {
        setValue(idx);
    }
    

    const showOnlyOneAnswerforQuestion = (idx) => {
        if (idx === value) {
            returnValue(quest, value);
            return true;
        }
        return false;
    }

return (
    <RadioGroup w="90%" mx={[2, 4, 6, 8]} textAlign="left"
        value={""} spacing={6} mt={6} >
        <Flex direction="column" >
            {answers.map((answer, idx) => (
                <Box d="flex" key={idx} variant="unstyled" alignItems="baseline" >
                    <Icon as={ImCheckmark2} fontSize="1.2rem" name='Correct' visibility={idx!==1?"hidden":"visible"}
                          aria-label="Correct" aria-hidden="true" color="green" />
                    <Radio key={idx} mt={4} value={value} mx={3}
                        onChange={() => handleChange(idx)}
                        isChecked={showOnlyOneAnswerforQuestion(idx)}
                    >{answer.answer}</Radio>
                </Box>
            ))}
        </Flex>
    </RadioGroup>
)

 }

export default RadioGroupComponent;