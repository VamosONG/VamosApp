import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Box,
  Image,
  Avatar,
  AvatarGroup,
  useMediaQuery,
  Progress
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Vamos from "../../assets/logoblanco.png";
import MobileNavbar from "../navBar/mobileNavbar/mobileNavbar";
import { useSelector } from "react-redux";
import SlideEx from "../../views/Forms/ViewForm";
import LogOut from "../../views/Forms/LogOut/logout";
import ViewOptionPerfil from "./viewOption/viewOptionPerfil";
import ViewBtnUserForm from "../../views/Forms/ViewForms/ViewUserForm";
import {verificationComplete} from '../../context/authContext';

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

 if (!verificationComplete) {
  return <div><Progress size='lg' isIndeterminate /></div>;
}else{
 return (
  <>
    {isMobile ? (
      <MobileNavbar />
    ) : (
      <Flex
        as="nav"
        bg={
          location.pathname === "/"
            ? navBackground
              ? "#009ED1"
              : "transparent"
            : "#009ED1"
        }
        alignItems="center"
        justify="space-between"
        h="80px"
        w="100%"
        position="fixed"
        top="0"
        left="0"
        zIndex="999"
        px="4"
        transition="background 0.5s ease"
      >
        <Box>
          <Image src={Vamos} alt="Vamos" w="150px" />
        </Box>

        <Box w="100%" alignContent="center" justifyContent="center">
          <Flex justify="center" alignItems="center">
            {currentUser.admin && currentUser.admin ? (
              <Box>
                <Flex>
                  <Link to="/">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      INICIO
                    </Button>
                  </Link>
                  
                  <Link to="/solicitudesDeViajes">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      SOLICITUDES DE VIAJE
                    </Button>
                  </Link>

                  {/* <Link to="/detail">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      CONDUCTORES
                    </Button>
                  </Link> */}


                  {/* <Link to="/profileAdmin">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      MI PERFIL
                    </Button>
                  </Link> */}

                  {/* {/* <Link to='/editPrices'>
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      CAMBIAR PRECIOS DE VIAJES
                    </Button>
                  </Link> */}
                </Flex>
              </Box>
            ) : currentUser.admin === false ? (
              <Box>
                <Flex>
                <Link to="/">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      INICIO
                    </Button>
                  </Link>

                  {/* <Link to="/solicitarViaje">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      SOLICITAR VIAJE
                    </Button>
                  </Link> */}

                  {/* <Link to="/profileUser">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      MI PERFIL
                    </Button>
                  </Link> */}

                  <Link to="/questions">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      PREGUNTAS FRECUENTES
                    </Button>
                  </Link>

                  {/* <Link to='/review&reseña'>
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      RESEÑA DE TU VIAJE
                    </Button>
                  </Link> */}
                
                </Flex>
              </Box>
            ) : (
              <Box>
                <Flex>
                  <Link to="/">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      INICIO
                    </Button>
                  </Link>

                  <Link to="/about">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      NOSOTROS
                    </Button>
                  </Link>

                  <Link to="/questions">
                    <Button colorScheme="#009ED1" fontSize="1xl">
                      PREGUNTAS FRECUENTES
                    </Button>
                  </Link>
                  {currentUser && currentUser.admin ? <LogOut /> : null}
                </Flex>
              </Box>
            )}
          </Flex>
        </Box>

        <Box>
          <AvatarGroup spacing="1rem" mx="20px">
            {currentUser === null || currentUser === undefined ? (

              <ViewBtnUserForm/>
            ) : (
              <ViewOptionPerfil/>
            )
            }
              {/* <ViewOptionPerfil/> */}
            {/* <SlideEx /> */}
          </AvatarGroup>
        </Box>
      </Flex>
    )}
  </>
);
}
};

export default NavBar;