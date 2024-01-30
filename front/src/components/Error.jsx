import { Box, Heading,Button } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Error = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // Espera 2500 milisegundos (2.5 segundos) antes de cambiar isLoading a false

        // Limpia el temporizador cuando el componente se desmonte o se actualice
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
          return <div>
            Cargando...</div>;

    }

    // Cuando isLoading sea false, renderiza el contenido de la página de error
    return (
        <Box>
            <Heading fontFamily="'DIN Alternate Black', sans-serif">EROR 404</Heading>
        <Link to="/">
            <Button>
            Volver
            </Button>
        </Link>
        </Box>
    );
}

export default Error;
