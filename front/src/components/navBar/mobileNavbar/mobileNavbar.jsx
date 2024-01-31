import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  IconButton,
  Image,
  AvatarGroup
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Vamos from "../../../assets/logoblanco.png";
import { useSelector } from "react-redux";
import LogOut from "../../../views/Forms/LogOut/logout";
import LoginViajes from "../../../views/Forms/Login/LoginViajes"



const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {currentUser} = useSelector(state=> state)

  const onToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box 
    maxW="1400px" 
    minW="375px" 
    width="100%" 
    marginX="auto" 
    bg="#009ED1"
    position="fixed"
    zIndex="999"
    >
      <Box p="4">
        <Image src={Vamos} alt="Vamos" w="80px" />
      </Box>

      <IconButton
        aria-label="Open mobile menu"
        icon={<HamburgerIcon />}
        onClick={onToggleDrawer}
        variant="unstyled"
        position="absolute"
        right="4"
        top="4"
      />

      <Drawer isOpen={isOpen} placement="top" onClose={onCloseDrawer}>
        <DrawerOverlay>
          <DrawerContent bg="#009ED1">
            <DrawerCloseButton />
            <DrawerHeader> </DrawerHeader>

            <DrawerBody>
              <VStack spacing="4">
                <Box>
                  <Image src={Vamos} alt="Vamos" w="100px" />
                </Box>
                {
                 currentUser?.admin ? (
                  <>
                    <Link to="/profileAdmin">
                      <Button colorScheme="#009ED1" w="100%">
                        PERFIL ADMINISTRADOR
                      </Button>
                    </Link>
                  </>
                ) : currentUser?.admin === false ? (
                  <>
                    <Link to="/profileUser">
                      <Button colorScheme="#009ED1" w="100%">
                       MI PERFIL
                      </Button>
                    </Link>
                    <Link to='/review&reseña'>
                      <Button colorScheme="#009ED1" w="100%">
                       RESEÑAS
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/">
                      <Button colorScheme="#009ED1" w="100%">
                        INICIO
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button colorScheme="#009ED1" w="100%">
                        NOSOTROS
                      </Button>
                    </Link>
                    <Link to="/questions">
                      <Button colorScheme="#009ED1" w="100%">
                        PREGUNTAS FRECUENTES
                      </Button>
                    </Link>        
                  </>
                )}  
                   {     !currentUser?.id?
                     ( 
                      <Link to= '/loginviajes'>
                        <Button colorScheme="#009ED1" w="100%">
                         INICIAR SESION
                        </Button>
                      </Link>
                      )
                      : currentUser?.id &&
                      <Button colorScheme="#009ED1" w="100%">
                        <LogOut/>          
               </Button>

                }
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
