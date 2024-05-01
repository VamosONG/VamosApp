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



const Home = () => {
    const dispatch= useDispatch();

    const conductoresPmostrar= useSelector((state)=>state.pageConductores);
    
    
    useEffect (()=>{
        dispatch(getAllConductores());
    },[dispatch])


    return (
        <>
            <Flex
                h={"40vh"}
                position='relative'
                direction={{ base: "column", md: "row" }}
                bgColor={"#FFFFFF"}
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
                    justify={['flex-start', null, 'center']}
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
                        flexDirection="column" // Cambia la dirección a columna en dispositivos pequeños
                        alignItems="flex-start" // Alinea los elementos a la izquierda
                        marginTop="1rem" // Agrega un margen superior
                         marginLeft={"-5px"}
                        paddingRight={"10%"}
                        
                    >
                        <Text>¡Planea tu viaje ahora! Traslados en Tumbes y Talara con confort y buen precio!</Text>
                    </UnorderedList>
                </Flex>
                <Flex
                   
                   
                    alignItems="center"
                    justifyContent="center"
                    minHeight="40vh"
                     width={{ base: "100%", md: "center" }}
                     mt={{ base: "20%", md: "0" }}
                    ml={{ base: "0", md: "0rem" }}
                    mr={{ base: "0", md: "6rem" }}
                    
                >
                    <Image position={"relative"} src={Avion} zIndex={"2"} alt='avion' minW={"200px"} maxW={"100%"} />
                </Flex>
            </Flex>
            <Flex position={"relative"} alignItems="center" justifyContent="center" minHeight="-100px" width="100%" mb={"10%"}>
                <SolicitudwViajeForm />
            </Flex>
            <WhatsAppButton />
        </>
    );
}

export default Home;
