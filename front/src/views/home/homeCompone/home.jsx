import React from "react";
import { Box, Button, Flex, Text, Heading, Stack, Card, CardBody, Divider, CardFooter, HStack, Image, Center } from '@chakra-ui/react';
import theme from "../../../theme/Theme";
import bgImage from "../../../assets/Aeropuerto.jpg"
import Basic from '../../../assets/VamosBasic.jpg'
import Comfort from '../../../assets/VamosComfort.jpg'
import Premium from '../../../assets/VamosPremium.jpg'
import { color } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllConductores } from "../../../redux/actions";

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
            <Flex
            direction='column'
            alignItems='center'
            justify='center'
            margin='100px'
            >
            <Stack
            direction={{ base: 'column', md: 'row'}}
            spacing='40px'
            mt='30px'
            w={['100%', null, 'auto']}
            >
            <HStack spacing='10'>
            <Card maxW='600px'bg='rgb(16, 68, 126)'>
            <CardBody>
            <Image
            src={Basic}
            alt='Plan Basico'
            borderRadius='lg'
            />
            <Stack mt='10' spacing='5'>
            <Heading fontSize='2xl' size='md' fontFamily="'DIN Alternate Black', sans-serif" textAlign='center' color='white'>Servicio estandar con tarifas asequibles.</Heading>
            <Text
            textAlign='center'
            color='white'
            fontSize='1xl'
            >
            "La opcion economica para tus traslados"
            </Text>
            <Text color='rgb(232, 61, 111)' fontSize='5xl' textAlign= 'center'>
            $20 Soles
            </Text>
            </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent='center'>
            <Button variant='solid' colorScheme='blue' size='lg' fontFamily="'DIN Alternate Black', sans-serif">
            RESERVAR
            </Button>
            </CardFooter>
            </Card>

            <Card maxW='600px'bg='rgb(16, 68, 126)'>
            <CardBody>
            <Image
            src={Comfort}
            alt='Plan Basico'
            borderRadius='lg'
            />
            <Stack mt='10' spacing='5'>
            <Heading 
            fontSize='2xl' 
            size='md' 
            fontFamily="'DIN Alternate Black', sans-serif" 
            textAlign='center' 
            color='white'
            >Servicio intermedio con mayor comodidad y prestaciones.</Heading>
            <Text
            textAlign='center'
            color='white'
            fontSize='1xl'
            >
            "Viaja con estilo y confort a un precio asequible"
            </Text>
            <Text color='rgb(232, 61, 111)' fontSize='5xl' textAlign= 'center'>
            $20 Soles
            </Text>
            </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent='center'>
            <Button variant='solid' colorScheme='blue' size='lg' fontFamily="'DIN Alternate Black', sans-serif">
            RESERVAR
            </Button>
            </CardFooter>
            </Card>

            <Card maxW='600px'bg='rgb(16, 68, 126)'>
            <CardBody>
            <Image
            src={Premium}
            alt='Plan Basico'
            borderRadius='lg'
            />
            <Stack mt='10' spacing='5'>
            <Heading fontSize='2xl' 
            size='md' 
            fontFamily="'DIN Alternate Black', sans-serif" 
            textAlign='center' color='white'
            >"La excelencia en cada viaje, sin compromisos"</Heading>
            <Text
            textAlign='center'
            color='white'
            fontSize='1xl'
            >
            Servicio de lujo con vehículos de mayor tamaño y comodidades premium.
            </Text>
            <Text color='rgb(232, 61, 111)' fontSize='5xl' textAlign= 'center'>
            $20 Soles
            </Text>
            </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent='center'>
            <Button variant='solid' colorScheme='blue' size='lg' fontFamily="'DIN Alternate Black', sans-serif">
            RESERVAR
            </Button>
            </CardFooter>
            </Card>
            </HStack>
            </Stack>
            </Flex>
        <Box>

        </Box>
    </>
);

}

export default Home;
