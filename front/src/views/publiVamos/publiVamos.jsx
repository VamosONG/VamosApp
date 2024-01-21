import React from "react";
import { Box, Flex, Text, Heading, Stack, Button } from "@chakra-ui/react";

import Van from '../../assets/vanvamos.jpg';

const VanVamos = () => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            h="100vh"
            position="relative"
            textAlign="center"
            mt={0}
            flexDirection="column" 
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                backgroundImage={`url(${Van})`}
                backgroundSize="cover"
                zIndex="-1"
            />
            <Flex
            direction='column'
            alignItems={['center', null, 'flex-start']}
            justify={['center', null, 'center']}
            h='100%'
            bg='rgb(0, 158, 209 / 10%)'
            p={['10px', null, '50px 10%']}
            ml={['0%', null, '0']}
            >
            <Text 
            color='white'
            textAlign='center'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['2xl', null, '4xl']}
            mb='2'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            mt={{ base: "2rem", md: "0" }}
            >
            FÁCIL, ECONÓMICO Y SEGURO
            </Text>
            <Heading
            color='#009ED1'
            textTransform='uppercase'
            textAlign='center'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['2xl', null, '8xl']}
            mb='2'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            mt={{ base: "rem", md: "0" }}
            >
            +51935455227
            </Heading>
            <Text 
            color='white'
            textAlign='center'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['2xl', null, '3xl']}
            mb='2'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            mt={{ base: "2rem", md: "0" }}
            >
            TU SERVICIO DE TAXI AEROPUERTO CONFIABLE Y ACCESIBLE.
            </Text>
            <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={['20px', null, '40px']}
            mt='30px'
            w={['100%', null, 'auto']}
            >
                <Button
                colorScheme='blue'
                size='lg'
                bg='#009ED1'
                _hover={{ bg: 'green.400' }}
                boxShadow='lg'
                >
                RESERVA
                </Button>
            </Stack>
            </Flex>
        </Flex>
    );
};

export default VanVamos;
