import React from "react";
import { Box, Button, Flex, Text, Heading, Stack, Card, CardBody, Divider, CardFooter, HStack, Image, Center, SimpleGrid, CardHeader } from '@chakra-ui/react';
import theme from "../../../theme/Theme";
import bgImage from "../../../assets/Aeropuerto.jpg"
import Basic from '../../../assets/VamosBasic.jpg'
import Comfort from '../../../assets/VamosComfort.jpg'
import Premium from '../../../assets/VamosPremium.jpg'
import Pago from '../../../assets/MercadoPago.png'
import { color } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllConductores } from "../../../redux/actions";
import Testimonials from "../../Testimonials/Testimonials";

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
            >
            RESERVA
            </Button>
            <Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            color='white'
            letterSpacing='1px'
            >
            + INFO
            </Button>
            </Stack>
            </Flex>
        </Box>
        <Box textAlign="center" mt={8}>
            <Heading as="h1" size="4xl" mb={8} fontFamily="'DIN Alternate Black', sans-serif">
            NUESTROS SERVICIOS
            </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px" mx="auto">
            <Card borderWidth="2px" borderRadius="lg">
                <Image src={Basic} alt='Plan Basico' borderRadius='lg' />
                <CardHeader>
                    <Heading 
                    fontSize='2xl'
                    fontFamily="'DIN Alternate Black', sans-serif" 
                    size='md'>"La opcion economica para tus traslados"</Heading>
                </CardHeader>
                <CardBody>
                    <Text
                    fontFamily="DIN Alternate, sans-serif"
                    >Servicio estándar con tarifas asequibles.</Text>
                </CardBody>
                    <Text 
                    color='rgb(232, 61, 111)' 
                    fontSize='4xl' 
                    textAlign= 'center'
                    fontFamily="'DIN Alternate Black', sans-serif"
                    >
                    $20 Soles
                    </Text>
                <CardFooter justifyContent="center">
                    <Button>RESERVA</Button>
                </CardFooter>
            </Card>
            <Card borderWidth="2px" borderRadius="lg">
                <Image src={Comfort} alt='Plan Comfort' borderRadius='lg' />
                <CardHeader>
                    <Heading 
                    fontSize='2xl'
                    fontFamily="'DIN Alternate Black', sans-serif" 
                    size='md'>"Viaja con estilo y confort a un precio asequible"</Heading>
                </CardHeader>
                <CardBody>
                    <Text
                    fontFamily="DIN Alternate, sans-serif"
                    >Servicio intermedio con mayor comodidad y prestaciones.</Text>
                </CardBody>
                    <Text 
                    color='rgb(232, 61, 111)' 
                    fontSize='4xl' 
                    textAlign= 'center'
                    fontFamily="'DIN Alternate Black', sans-serif"
                    >
                    $20 Soles
                    </Text>
                <CardFooter justifyContent="center">
                    <Button>RESERVA</Button>
                </CardFooter>
            </Card>
            <Card borderWidth="2px" borderRadius="lg">
                <Image src={Premium} alt='Plan Premium' borderRadius='lg'  />
                <CardHeader>
                    <Heading 
                    fontSize='2xl'
                    fontFamily="'DIN Alternate Black', sans-serif" 
                    size='md'>"La excelencia en cada viaje, sin compromisos"</Heading>
                </CardHeader>
                <CardBody>
                    <Text
                    fontFamily="DIN Alternate, sans-serif"
                    >Servicio de lujo con vehículos de mayor tamaño y comodidades premium.
                    </Text>
                </CardBody>
                    <Text 
                    color='rgb(232, 61, 111)' 
                    fontSize='4xl' 
                    textAlign= 'center'
                    fontFamily="'DIN Alternate Black', sans-serif"
                    >
                    $20 Soles
                    </Text>
                <CardFooter justifyContent="center">
                    <Button>RESERVA</Button>
                </CardFooter>
            </Card>
            </SimpleGrid>
                <Image 
                src={Pago} 
                alt="Logo de Mercado Pago" 
                mx="auto" 
                mt={4}
                maxW={{ base: '100%', md: '200px'}}
                />
        </Box>
        <Testimonials/>
    </>
);

}

export default Home;
