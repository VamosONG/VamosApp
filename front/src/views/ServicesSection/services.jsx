import React from "react";
import { 
    Box, 
    Heading, 
    SimpleGrid, 
    Image, 
    Text, 
    Card,
    Flex
} from "@chakra-ui/react";

import Persona from '../../assets/equipajepersona.jpg';
import Equipaje from '../../assets/equipajeavion.jpeg';

const Services = () => {

    return (
        <>
            <Box position="relative" textAlign="center" mt={0}>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={0}>
            <Card
            overflow='hidden'
            bgColor='#009ED1'
            maxW={{ base: '100%', md: '865px' }}
            borderRadius={0}
            >
            <Flex 
            alignItems="center">
                <Image
                objectFit='cover'
                maxW={{ base: '50%', md: '120px' }}
                h="auto"
                src={Equipaje}
                alt='Equipaje'
                />
                <Box p={4} textAlign="left" flex="1">
                    <Flex justifyContent="center">
                        <Box>
                            <Heading
                            color='white'
                            fontSize='3xl'
                            fontFamily="'DIN Alternate Black', sans-serif"
                            textShadow='2px 2px 4px rgb(0, 0, 0, 0.3)'
                            size='md'
                            >
                                Del Aeropuerto a la ciudad.
                            </Heading>
                            <Text my='4' color='white' fontSize='2xl' fontFamily="'DIN Alternate Black', sans-serif" textShadow='2px 2px 4px rgb(0, 0, 0, 0.3)'>
                                Atencion inmediata y menos tiempo de espera.
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                </Flex>
            </Card>
            <Card
            overflow='hidden'
            bgColor='#009ED1'
            maxW={{ base: '100%', md: '865px' }}
            borderRadius={0}
            >
            <Flex alignItems="center">
                <Image
                objectFit='cover'
                maxW={{ base: '50%', md: '120px' }}
                h="auto"
                src={Persona}
                alt='Persona'
                />
                <Box p={4} textAlign="left" flex="1">
                    <Flex justifyContent="center">
                        <Box>
                            <Heading
                            color='white'
                            fontSize='3xl'
                            fontFamily="'DIN Alternate Black', sans-serif"
                            textShadow='2px 2px 4px rgb(0, 0, 0, 0.3)'
                            size='md'
                            >
                                De La Ciudad al Aeropuerto.
                            </Heading>
                            <Text my='4' color='white' fontSize='2xl' fontFamily="'DIN Alternate Black', sans-serif" textShadow='2px 2px 4px rgb(0, 0, 0, 0.3)'>
                                ¡Reducimos las tarifas hacia al Aeropuerto!
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                </Flex>
            </Card>
            </SimpleGrid>
        </Box>
    </>
    );
};

export default Services;