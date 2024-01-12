import React from "react";
import { Box, Button, Flex, Text, Heading, VStack, Stack } from '@chakra-ui/react';
import theme from "../../../theme/Theme";
import bgImage from "../../../assets/Aeropuerto.jpg"
import { color } from "framer-motion";

const Home = () => {

    return (
        <Box
        h='100vh'
        bg='gray'
        bgImage={`url(${bgImage})`}
        bgRepeat='no-repeat'
        bgSize='cover'
        >
            <Flex
            direction='column'
            alignItems='center'
            justify='center'
            h='100%'
            bg='rgb(0 0 0 / 40%)'
            p={['0 10%', null, '0 20%']}
            >
            <Heading
            color='white'
            textTransform='uppercase'
            textAlign='left'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize="6xl"
            >
            Bienvenido a "Vamos", una empresa social comprometida con brindar servicios de taxi aeropuerto.
            </Heading>
            <Text
            textAlign="left"
            fontFamily="'DIN Medium',"
            color="white"
            fontSize="3xl"
            >
            Nos enorgullece ofrecer traslados desde Tumbes e Talar hacia domicilios y hoteles, con tarifas asequibles a partir de 20 soles (aprox. US$5). 
            Nuestra misión va más allá de brindar un servicio de transporte; también creamos 
            oportunidades laborales para adultos mayores que desean seguir emprendiendo. 
            Con 'Vamos', tienes la garantía de vehículos nuevos y cómodos, disponible las 24 horas.
            </Text>
            <Stack
            direction={{ base: 'column', md: 'row'}}
            spacing='40px'
            mt='30px'
            w={['100%', null, 'auto']}
            >
            <Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            color='white'
            letterSpacing='1px'
            _hover={{
                color:'Black',
                bg: 'white'
            }}
            >RESERVA</Button>
            <Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            color='white'
            letterSpacing='1px'
            >+ INFO</Button>

            </Stack>
            </Flex>
        
        </Box>
    );

}

export default Home;