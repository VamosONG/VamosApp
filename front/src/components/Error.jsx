import { Box, Heading,Button, CircularProgress } from "@chakra-ui/react";
// import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {verificationComplete} from '../context/authContext';

const Error = () => {
    if (!verificationComplete) {
        return (

        <Box h="100vh"  // Establece la altura del contenedor al 100% de la altura de la ventana
        display="flex"
        flexDirection="column"
        justifyContent="center"  // Centra verticalmente el contenido
        alignItems="center"
        bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705767640/Vamos/wavesvamos_rt0ovd.jpg"
        bgSize="cover"
        bgRepeat="no-repeat"
        >
            <Heading fontFamily="'DIN Alternate Black', sans-serif">Cargando...</Heading>
            <CircularProgress isIndeterminate color='blue.300' />
        </Box>
        )
      }else{
    // Cuando isLoading sea false, renderiza el contenido de la página de error
    return (
        <Box h="100vh"  // Establece la altura del contenedor al 100% de la altura de la ventana
        display="flex"
        flexDirection="column"
        justifyContent="center"  // Centra verticalmente el contenido
        alignItems="center"
        bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705767640/Vamos/wavesvamos_rt0ovd.jpg"
        bgSize="cover"
        bgRepeat="no-repeat"
        >
            <Heading fontFamily="'DIN Alternate Black', sans-serif">ERROR 404 - Contenido no encontrado</Heading>
        <Link to="/">
            <Button size='lg' bgGradient='linear(to-r, blue.200, pink.300)'>
            VOLVER
            </Button>
        </Link>
        </Box>
    );
}
}
export default Error;
