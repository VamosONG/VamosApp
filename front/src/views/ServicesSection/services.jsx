import React from "react";
import { Box, Heading, SimpleGrid, Image, Text, Button, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

import Basic from '../../assets/vamosBasic.jpg'
import Comfort from '../../assets/vamosComfort.jpg'
import Premium from '../../assets/vamosPremium.jpg'
import Pago from '../../assets/mercadoPago.png'


const Services = () =>{

    return (
        <>
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
        </>
    );
};

export default Services;