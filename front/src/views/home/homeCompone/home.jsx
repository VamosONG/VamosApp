import React from "react";
import { Box, Button, Flex, Text, Heading, VStack } from '@chakra-ui/react';
import theme from "../../../Theme";


const Home = () => {

    return (
        <Box 
        p={4}
        height="100vh"
        position="relative"
        >
            <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg={`url('https://scontent.fcor13-1.fna.fbcdn.net/v/t1.6435-9/52358920_2269546896622104_8051910507050827776_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=MJHbQK6mrwkAX9i4iVu&_nc_ht=scontent.fcor13-1.fna&oh=00_AfAZcN-nU7V_RbcBdFdE33J9jwe2tvhIo3mLn4xWvZLCqw&oe=65C6925F') center/cover fixed no-repeat`}
            bgColor="rgba(0, 0, 0, 0.5)"
            filter="brightness(60%) blur(1px)"
            zIndex={-1}
            />
            <Box margin="10rem">
                <Flex direction="column" align="center">
                    <VStack spacing={8} align="center">
                        <Heading as="h2" size="x1" fontFamily="'DIN Alternate Black', sans-serif" color="white" fontSize="6xl" textAlign="left">
                        Bienvenido a "Vamos", una empresa social comprometida con brindar servicios de taxi aeropuerto.</Heading>
                        <Text textAlign="left" fontFamily="'DIN Medium'," color="white" fontSize="3xl"
                        >Nos enorgullece ofrecer traslados desde Tumbes e Talar hacia domicilios y hoteles, con tarifas asequibles a partir de 20 soles (aprox. US$5). 
                        Nuestra misión va más allá de brindar un servicio de transporte; también creamos 
                        oportunidades laborales para adultos mayores que desean seguir emprendiendo. 
                        Con 'Vamos', tienes la garantía de vehículos nuevos y cómodos, disponible las 24 horas.
                        </Text>
                        <Button colorScheme="blue" >Reserva</Button>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    );
    
    }
    
    export default Home;