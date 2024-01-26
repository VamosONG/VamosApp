import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import Wave from '../../assets/wavesvamos.jpg';

const InfoVamos = () => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            minH="100vh" // Cambiado de h a minH
            position="relative"
            textAlign="center"
            mt={0}
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                backgroundImage={`url(${Wave})`}
                backgroundSize="cover"
                zIndex="-1"
            />
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={10}
            >
                <Heading
                    fontFamily="'DIN Alternate Black', sans-serif"
                    letterSpacing='1px'
                    fontSize={['2xl', null, '6xl']}
                    textShadow='4px 4px 4px rgb(0, 0, 0, 0.4)'
                >
                    ACERCA DE VAMOS
                </Heading>
                <Text
                    color="Black"
                    fontSize="3xl"
                    fontFamily="'DIN Alternate Black', sans-serif"
                    mt='2px'
                    textShadow='4px 4px 4px rgb(0, 0, 0, 0.3)'
                >
                    Vamos es una empresa social, comprometida con brindar servicios
                    de taxi aeropuerto confiables y accesibles. Nuestra misión es crear
                    oportunidades laborales para adultos mayores y garantizar traslados seguros y cómodos.
                </Text>
            </Flex>
        </Flex>
    );
};

export default InfoVamos;
