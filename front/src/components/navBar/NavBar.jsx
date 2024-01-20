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
import {useSelector} from "react-redux";
import SlideEx from "../../views/Forms/ViewForm";
const NavBar = () => {

  const {currentUser} = useSelector(state => state)
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
                   <Link to="/reservas">
                      <Button colorScheme="#009ED1" fontSize='1xl'>RESERVAS</Button>
                    </Link>
                    </Flex>
                 </Box>

                    ) : (currentUser.admin === false?  (
                  <Box>
                    <Flex>
                    <Link to="/solicitarViaje">
                      <Button colorScheme="#009ED1" fontSize='1xl'>SOLICITAR VIAJE</Button>
                    </Link>
                    <Link to="/perfil">
                      <Button colorScheme="#009ED1" fontSize='1xl'>MI PERFIL</Button>
                    </Link>
                    <Link to="/frecuentes">
                      <Button colorScheme="#009ED1" fontSize='1xl'>PREGUNTAS FRECUENTES</Button>
                    </Link>
                    </Flex>
                  </Box>
                    ): 
                   
                  <Box>
                  <Flex>
                    <Link to="/landing">
                      <Button colorScheme="#009ED1" fontSize='1xl'>INICIO</Button>
                    </Link>
                  
                    <Link to="/about">
                      <Button colorScheme="#009ED1" fontSize='1xl'>NOSOTROS</Button>
                    </Link>
                  </Flex>
                  </Box>
                  
                  )
                }
             

          <AvatarGroup spacing="1rem" mx="20px">
            <Avatar bg="#009ED1">
            <SlideEx />
            </Avatar>
            </AvatarGroup>

                </Flex>
            </Box>

        </>
       
        {isMobile && <MobileNavbar />}
        </Flex>
  );
};
export default NavBar;