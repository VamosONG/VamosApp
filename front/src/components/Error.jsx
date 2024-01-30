import { Box, Heading,Button } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {verificationComplete} from '../context/authContext';

const Error = () => {
    if (!verificationComplete) {
        return <div>RUEDITA DE CARGA</div>;
      }else{
    // Cuando isLoading sea false, renderiza el contenido de la página de error
    return (
        <Box h="100vh"  // Establece la altura del contenedor al 100% de la altura de la ventana
        display="flex"
        flexDirection="column"
        justifyContent="center"  // Centra verticalmente el contenido
        alignItems="center">
            <Heading fontFamily="'DIN Alternate Black', sans-serif">ERROR 404 - Contenido no encontrado</Heading>
        <Link to="/">
            <Button>
            Volver
            </Button>
        </Link>
        </Box>
    );
}
}
export default Error;
