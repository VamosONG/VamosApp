import React from "react";
import { Box, Flex, Text, Heading, useBreakpointValue } from "@chakra-ui/react";

import Gallery from "../gallery/gallery";

const InfoVamos = () => {

    const fontSizeHeading = useBreakpointValue({ base: "3xl", md: "2xl", lg: "6xl" });
    const fontSizeText = useBreakpointValue({ base: "xl", md: "xl", lg: "3xl" });

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            minH="100vh"
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
                backgroundImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1706565530/Vamos/d7q4rpqehk0nkjpmwypf.jpg"
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
                    fontSize={fontSizeHeading}
                    textShadow='2px 2px 2px rgb(0, 0, 0, 0.4)'
                    color="white"
                >
                    ACERCA DE VAMOS
                </Heading>
                <Text
                    fontSize={fontSizeText}
                    fontFamily='DIN Medium, sans-serif'
                    mt='2px'
                    textShadow='3px 3px 3px rgb(0, 0, 0, 0.3)'
                    color="white"
                    mb={5}
                >
                    Vamos es una empresa social, comprometida con brindar servicios
                    de taxi aeropuerto confiables y accesibles. Nuestra misión es crear
                    oportunidades laborales para adultos mayores y garantizar traslados seguros y cómodos.
                </Text>
                <Gallery/>
            </Flex>
        </Flex>
    );
};

export default InfoVamos;
