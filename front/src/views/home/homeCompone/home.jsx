import React from "react";
import { 
    Box, 
    Button, 
    Flex, 
    Text, 
    Heading, 
    Stack, 
    Skeleton, 
    UnorderedList, 
    ListItem, 
    Grid,
    Image 
} from '@chakra-ui/react';
import bgImage from "../../../assets/Aeropuerto1.jpg";

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

const Home = () => {
    const dispatch= useDispatch();

    const conductoresPmostrar= useSelector((state)=>state.pageConductores);
    console.log(conductoresPmostrar)
    
    useEffect (()=>{
        dispatch(getAllConductores());
    },[dispatch])


    return (
        <>
        {/* <Link to='/review&reseña'>
        <Button>
            
            ReviewAndReseña
        </Button>
        </Link> */} {/* No me borren esta vaina, después le encontraré un lugar */}
        {/* <Link to='/editPrices'>
        <Button>
            
            Cambiar precios de viajes
        </Button>
        </Link> */} {/* Esta tampoco */}
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
            filter='blur(2px) brightness(0.8)'
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
            mt={{ base: "2rem", md: "0" }}
            >
            Bienvenido a "Vamos", una empresa social de taxi aeropuerto.
            </Heading>
            <UnorderedList
            textAlign={['left', null, 'left']}
            fontFamily="'DIN Medium',"
            color="white"
            fontSize={['lg', null, '2xl']}
            mt='1px'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            >
            <ListItem>Traslados disponibles desde Tumbes e Talar hacia domicilios y hoteles.</ListItem>
            <ListItem>Tarifas asequibles para nuestros servicios de transporte.</ListItem>
            <ListItem>Brindamos oportunidades laborales a emprendedores adultos mayores.</ListItem>
            <ListItem>Garantizamos vehículos nuevos y cómodos para tu comodidad.</ListItem>
            <ListItem>Amplia disponibilidad horaria para adaptarse a tus necesidades.</ListItem>
            </UnorderedList>
            <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={['20px', null, '40px']}
            mt='30px'
            w={['100%', null, 'auto']}
            >
                <Button
                colorScheme='blue'
                size='lg'
                bg='rgb(232, 61, 111)'
                _hover={{ bg: 'green.400' }}
                boxShadow='lg'
                >
                RESERVA
                </Button>
                <Button
                colorScheme='blue'
                size='lg'
                bg='rgb(0, 158, 209)'
                _hover={{ bg: 'green.400' }}
                boxShadow='lg'
                >
                + INFO
                </Button>
            </Stack>
            </Flex>
        </Box>
        <Testimonials/>
        <Services/>
        <Publi/>
        <CompanySlider/>
        <InfoVamos/>
        <WhatsAppButton/>
    </>
);

}

export default Home;
