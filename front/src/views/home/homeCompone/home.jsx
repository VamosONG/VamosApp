import React from "react";
import { Box, Button, Flex, Text, Heading, Stack, } from '@chakra-ui/react';
import bgImage from "../../../assets/Aeropuerto1.jpg"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllConductores } from "../../../redux/actions";
import Testimonials from "../../Testimonials/Testimonials";
import Services from "../../ServicesSection/services";

const Home = () => {
    const dispatch= useDispatch();

    const conductoresPmostrar= useSelector((state)=>state.pageConductores);
    console.log(conductoresPmostrar)
    
    useEffect (()=>{
        console.log("pasa")
        dispatch(getAllConductores());
    },[dispatch])


    return (
        <>
        <Box
        h='100vh'
    
        position= 'relative'
        >
            <Box
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            bgImage={`url(${bgImage})`}
            bgSize='cover'
            bgPosition='center'
            filter='blur(2px)'
            zIndex='-1'
            />
            <Flex
            direction='column'
            alignItems={['flex-start', null, 'flex-start']}
            justify={['flex-start', null, 'center']}
            h='100%'
            bg='rgb(0 0 0 / 40%)'
            p={['30px', null, '50px 10%']}
            >
            <Heading
            color='white'
            textTransform='uppercase'
            textAlign={['left', null, 'left']}
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['2xl', null, '5xl']}
            mb='2'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            >
            Bienvenido a "Vamos", una empresa social comprometida con brindar servicios de taxi aeropuerto.
            </Heading>
            <Text
            textAlign={['left', null, 'left']}
            fontFamily="'DIN Medium',"
            color="white"
            fontSize={['lg', null, '3xl']}
            mt='4'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            >
            Nos enorgullece ofrecer traslados desde Tumbes e Talar hacia domicilios y hoteles, con tarifas asequibles.
            Nuestra misión va más allá de brindar un servicio de transporte; también creamos oportunidades laborales para adultos mayores que desean seguir emprendiendo.
            Con 'Vamos', tienes la garantía de vehículos nuevos y cómodos, con amplia variedad de disponibilidad horaria.
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
                >
                RESERVA
                </Button>
                <Button
                colorScheme='blue'
                size='lg'
                >
                + INFO
                </Button>
            </Stack>
            </Flex>
        </Box>
        <Services/>
        <Testimonials/>
    </>
);

}

export default Home;
