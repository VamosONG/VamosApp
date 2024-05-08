import React from "react";
import { 
    Box, 
    Flex, 
    Heading, 
    UnorderedList, 
    ListItem,
    Image,
    Text
} from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllConductores } from "../../../redux/actions";
import WhatsAppButton from "../../whatsAppButton/whatsAppButton";
import SolicitudwViajeForm from "../../Forms/SolicitudViaje/SolicitudwViajeForm";
import Avion from '../../../assets/avion.png'
import fondoVamos1 from '../../../assets/fondoVamos1.jpg'
import Footer from "../../../views/footer/footer"

const Home = () => {
    const dispatch= useDispatch();
    const conductoresPmostrar= useSelector((state)=>state.pageConductores);
    
    useEffect (()=>{
        dispatch(getAllConductores());
    },[dispatch])

    return (
        <>
            <Flex
                // h={"40vh"}
                position='relative'
                direction={{ base: "column", md: "row" }}
                pt={"8%"}
            >
                <Box
                    position='absolute'
                    top='0'
                    left='0'
                    w='100%'
                    bgSize='cover'
                    bgPosition='center'
                    filter='blur(2px) brightness(0.5)'
                    zIndex='-1'
                />
                <Flex
                    direction='column'
                    alignItems={['flex-start', null, 'flex-start']}
                    justify={["center", null, 'center']}
                    h='100%'
                    w='100%'
                    mb={{ base: '-10rem', md: '2' }}
                    pl={['10%', null, '50px 10%']}
                >
                    <Heading
                        color='#054C84'
                        textAlign={['left', null, 'left']}
                        fontFamily="inherit"
                        letterSpacing='1px'
                        fontSize={['xl', null, '4xl']}
                        mb='2'
                        mt={{ base: "2rem", md: "0" }}
                        marginTop={{ base: "30%", lg: "0%" }}
                    >
                        ¡Bienvenido a <Text as="strong" fontSize={['xl', null, '5xl']}>Vamos!</Text>
                    </Heading>
                    <UnorderedList
                        textAlign={['left', null, 'left']}
                        fontFamily="'DIN Medium',"
                        color='#054C84'
                        fontSize={['lg', null, '2xl']}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        marginTop="1rem"
                        marginLeft={"-5px"}
                        paddingRight={"10%"}
                        marginBottom="1rem" // Agregamos un margen inferior para separar el texto del formulario
                    >
                        <Text>¡Planea tu viaje ahora! Traslados a Piura,Tumbes y Talara con comfort y buen precio!</Text>
                    </UnorderedList>
                </Flex>
            </Flex>
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                marginTop={{ base: "12rem", md: "2rem" }} // Ajustamos el margen superior en diferentes tamaños de pantalla
                marginBottom={{ base: "1rem", md: "2rem" }} // Ajustamos el margen inferior en diferentes tamaños de pantalla
            >
                <SolicitudwViajeForm />
            </Flex>
            <WhatsAppButton />
            <Flex>
                <Footer/>
            </Flex>
        </>
    );
}

export default Home;
