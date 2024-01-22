import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Box,
  Image,
  useDisclosure,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Vamos from "../../assets/logoblanco.png";
import MobileNavbar from "../navBar/mobileNavbar/mobileNavbar";
import { useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SlideEx from "../../views/Forms/ViewForm";
const NavBar = () => {

  const { currentUser } = useSelector(state => state)
  const [navBackground, setNavBackground] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  const handleScroll = () => {
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
    <> 
    {isMobile ? (<MobileNavbar/>) : (
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
          <Box >
            <Image src={Vamos} alt="Vamos" w='150px' />
          </Box >

          <Box w="100%" alignContent='center' justifyContent='center'>
            <Flex justify='center' alignItems="center">
              {
                 currentUser.admin && currentUser.admin ?
                  (
                    <Box>
                      <Flex>
                        <Link to="/solicitudesDeViajes">
                          <Button colorScheme="#009ED1" fontSize='1xl'>SOLICITUDES DE VIAJE</Button>
                        </Link>

                        <Link to="/detail">
                          <Button colorScheme="#009ED1" fontSize='1xl'>CONDUCTORES</Button>
                        </Link>
                        {/* <Link to="/reservas">
                          <Button colorScheme="#009ED1" fontSize='1xl'>RESERVAS</Button>
                        </Link> */}
                        <Link to="/">
                          <Button colorScheme="#009ED1" fontSize='1xl'>INICIO</Button>
                        </Link>
                      </Flex>
                    </Box>

                  ) : currentUser.admin === false ? (
                    <Box>
                      <Flex>
                        <Link to="/solicitarViaje">
                          <Button colorScheme="#009ED1" fontSize='1xl'>SOLICITAR VIAJE</Button>
                        </Link>
                        <Link to="/profile">
                          <Button colorScheme="#009ED1" fontSize='1xl'>MI PERFIL</Button>
                        </Link>
                        {/* <Link to="/frecuentes">
                          <Button colorScheme="#009ED1" fontSize='1xl'>PREGUNTAS FRECUENTES</Button>
                        </Link> */}
                        <Link to='/review&reseña'>
                          <Button colorScheme="#009ED1" fontSize='1xl'>RESEÑA DE TU VIAJE</Button>
                        </Link>
                        <Link to="/">
                          <Button colorScheme="#009ED1" fontSize='1xl'>INICIO</Button>
                        </Link>
                      </Flex>
                    </Box>
                  ) : (
                    <Box>
                      <Flex>
                        {/* Ahora direccionara al home page, la ruta landing no existe */}
                        <Link to="/">
                          <Button colorScheme="#009ED1" fontSize='1xl'>INICIO</Button>
                        </Link>

                        <Link to="/about">
                          <Button colorScheme="#009ED1" fontSize='1xl'>NOSOTROS</Button>
                        </Link>

                        {/* <Link to="/questions">
                          <Button colorScheme="#009ED1" fontSize='1xl'>PREGUNTAS FRECUENTES</Button>
                        </Link> */}
                      </Flex>
                    </Box>
                  )
              }
              
            </Flex>
          </Box>

          <Box >
            <AvatarGroup spacing="1rem" mx="20px" >
              {currentUser.admin && currentUser.admin ? (
                <Avatar size='md' name='Ryan Florence' bg="#009ED1" src={currentUser.photoURL} /> 
              ) : null}
                  <SlideEx />
              </AvatarGroup>
          </Box >
      </Flex>
    ) }
    </>
  );
};
export default NavBar;