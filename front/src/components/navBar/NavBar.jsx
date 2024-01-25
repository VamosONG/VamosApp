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
import { Link, useLocation } from "react-router-dom";
import Vamos from "../../assets/logoblanco.png";
import MobileNavbar from "../navBar/mobileNavbar/mobileNavbar";
import { useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SlideEx from "../../views/Forms/ViewForm";

const NavBar = () => {
  const { currentUser } = useSelector((state) => state);
  const [navBackground, setNavBackground] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    setNavBackground(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [role,setRole]=useState("notUser")
 const handleClick=(role)=>{
  if (role==='usuario'){setRole('user')}
  if (role==='admin'){setRole('admin')}
  
 }
  return (
    <> 
    {isMobile ? (<MobileNavbar/>) : (
      <Flex
        as="nav"
        bg={location.pathname === "/" ? (navBackground ? "#009ED1" : "transparent") : "#009ED1"}
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
                  currentUser.admin && currentUser.admin  ?
                  // role==='admin'?
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
                        <Link to="/adminprofile">
                          <Button colorScheme="#009ED1" fontSize='1xl'>MI PERFIL</Button>
                        </Link>
                        <Link to='/editPrices'>
        <Button colorScheme="#009ED1" fontSize='1xl'>
            
            CAMBIAR PRECIOS DE VIAJES
        </Button>
        </Link> 
                      </Flex>
                    </Box>

                  ) :  currentUser.admin === false  ?(
                  // role==='user'? 
                  
                    <Box>
                      <Flex>
                        <Link to="/solicitarViaje">
                          <Button colorScheme="#009ED1" fontSize='1xl'>SOLICITAR VIAJE</Button>
                        </Link>

                        <Link to="/userprofile">
                          <Button colorScheme="#009ED1" fontSize='1xl'>MI PERFIL</Button>
                        </Link>
                        <Link to="/questions">
                          <Button colorScheme="#009ED1" fontSize='1xl'>PREGUNTAS FRECUENTES</Button>
                        </Link>

                        

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

                        <Link to="/questions">
                          <Button colorScheme="#009ED1" fontSize='1xl'>PREGUNTAS FRECUENTES</Button>
                        </Link>

                      </Flex>
                    </Box>
                  )
              }
              
            </Flex>
          </Box>
                     {/* <Button colorScheme='teal' size='xs' marginLeft={'25rem'} onClick={()=>handleClick("usuario")}>
    Usuario
  </Button>
                        <Button colorScheme='teal' size='xs'  onClick={()=>handleClick("admin")}>
    Admin
  </Button>  */}

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