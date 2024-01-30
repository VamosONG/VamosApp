import React from "react";
import { 
    Box, 
    Flex, 
    Heading, 
    UnorderedList, 
    ListItem,
} from '@chakra-ui/react';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllConductores } from "../../../redux/actions";
import Testimonials from "../../Testimonials/Testimonials";
import Services from "../../ServicesSection/services";
import WhatsAppButton from "../../whatsAppButton/whatsAppButton";
import CompanySlider from "../../carouselVamos/carouselVamos";
import InfoVamos from "../../infoVamos/infoVamos";
import Publi from "../../publiVamos/publiVamos";
import SolicitudwViajeForm from "../../Forms/SolicitudViaje/SolicitudwViajeForm";
import MiniBanner from "../../miniBanner/miniBanner";

const Home = () => {
    const dispatch= useDispatch();

    const conductoresPmostrar= useSelector((state)=>state.pageConductores);
    console.log(conductoresPmostrar)
    
    useEffect (()=>{
        dispatch(getAllConductores());
    },[dispatch])


    return (
        <>
        
        <Flex
        h='100vh'
        position= 'relative'
        direction={{ base: "column", md: "row" }}
        >
            <Box
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705767603/Vamos/Aeropuerto1_ypg3br.jpg"
            bgSize='cover'
            bgPosition='center'
            filter='blur(2px) brightness(0.5)'
            zIndex='-1'
            />
            <Flex
            direction='column'
            alignItems={['flex-start', null, 'flex-start']}
            justify={['flex-start', null, 'center']}
            h='100%'
            w='100%'
            mb={{ base: '-10rem', md: '2' }}
            p={['30px', null, '50px 10%']}
            >
            <Heading
            color='white'
            textTransform='uppercase'
            textAlign={['left', null, 'left']}
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['2xl', null, '4xl']}
            mb='2'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            mt={{ base: "1rem", md: "0" }}
            >
            Bienvenido a "Vamos".
            </Heading>
            <UnorderedList
            textAlign={['left', null, 'left']}
            fontFamily="'DIN Medium',"
            color="white"
            fontSize={['lg', null, '2xl']}
            mt='0px'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            display={['none', null, 'block']}
            visibility={['hidden', null, 'visible']}
            >
            <ListItem>Traslados disponibles desde Tumbes y Talara hacia domicilios y hoteles.</ListItem>
            <ListItem>Tarifas asequibles para nuestros servicios de transporte.</ListItem>
            <ListItem>Brindamos oportunidades laborales a emprendedores adultos mayores.</ListItem>
            <ListItem>Garantizamos vehículos nuevos y cómodos para tu comodidad.</ListItem>
            <ListItem>Amplia disponibilidad horaria para adaptarse a tus necesidades.</ListItem>
            </UnorderedList>
            
            </Flex>
                <Flex 
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                width="100%"
                >
                <SolicitudwViajeForm/>
                </Flex>
        </Flex>
        <Services/>
        <Testimonials/>
        <Publi/>
        <MiniBanner/>
        <CompanySlider/>
        <InfoVamos/>
        <WhatsAppButton/>
    </>
);

}

export default Home;
