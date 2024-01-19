import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Box,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Vamos from "../../assets/logoblanco.png";
import MobileNavbar from "../navBar/mobileNavbar/mobileNavbar";
import { useMediaQuery } from "@chakra-ui/react";


const NavBar = () => {

  const [navBackground, setNavBackground] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 1400px)');
  
  const handleScroll =  () => {
    const offset = window.scrollY;
    setNavBackground(offset > 50);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
        <Flex 
        as="nav"
        bg={navBackground ? "#009ED1" : "transparent"}
        alignItems="center"
        justify="space-between"
        h="100px"
        w="100%"
        position="fixed"
        top="0"
        left="0"
        zIndex="999"
        px="4"
        transition="background 0.5s ease"
        >
        <>
            <Box >
              <Image src={Vamos} alt="Vamos" w='150px' />
            </Box >
            
            <Box w="100%" alignContent='center' justifyContent='center'>
                <Flex justify='center' alignItems="center">
                  <Box>
                    <Link to="/solicitudesDeViajes">
                      <Button colorScheme="#009ED1" fontSize='1xl'>SOLICITUDES DE VIAJE</Button>
                    </Link>
                  </Box>
                  <Box>
                    <Link to="/solicitarViaje">
                      <Button colorScheme="#009ED1" fontSize='1xl'>SOLICITAR VIAJE</Button>
                    </Link>
                  </Box>
                  <Box>
                    <Link to="/detail">
                      <Button colorScheme="#009ED1" fontSize='1xl'>CONDUCTORES</Button>
                    </Link>
                  </Box>
                  <Box>
                  <Flex>
                    <Link to="/landing">
                      <Button colorScheme="#009ED1" fontSize='1xl'>INICIO</Button>
                    </Link>
                    <Link to="/reservas">
                      <Button colorScheme="#009ED1" fontSize='1xl'>RESERVAS</Button>
                    </Link>
                    <Link to="/frecuentes">
                      <Button colorScheme="#009ED1" fontSize='1xl'>PREGUNTAS FRECUENTES</Button>
                    </Link>
                    <Link to="/about">
                      <Button colorScheme="#009ED1" fontSize='1xl'>NOSOTROS</Button>
                    </Link>
                    <Link to="/perfil">
                      <Button colorScheme="#009ED1" fontSize='1xl'>MI PERFIL</Button>
                    </Link>
                  </Flex>
                  </Box>
                </Flex>
            </Box>
        </>
        {isMobile && <MobileNavbar />}
        </Flex>
  );
};
export default NavBar;