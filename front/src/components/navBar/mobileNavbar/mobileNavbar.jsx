import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Flex,
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
import Vamos from "../../../assets/logo.png";
import { useSelector } from "react-redux";
import LogOut from "../../../views/Forms/LogOut/logout";
import LoginViajes from "../../../views/Forms/Login/LoginViajes";
import User from "../../../assets/user.png"

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser } = useSelector(state => state);

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
    <Flex
      maxW="1400px"
      minW="375px"
      width="100%"
      marginX="auto"
      bg="white"
      position="fixed"
      zIndex="999"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="4"
    >
       <IconButton
        aria-label="Open mobile menu"
        icon={<HamburgerIcon />}
        onClick={onToggleDrawer}
        variant="unstyled"
        position="absolute"
        right="4"
        top="4" 
         marginRight={"85%"}
      />
      <Image marginLeft={"43%"} src={Vamos} alt="Vamos" w="80px" mt={"10px"}/>

     <Button bgImage={User}>

      
     </Button>

      <Drawer  isOpen={isOpen} placement="top" onClose={onCloseDrawer}>
        <DrawerOverlay>
          <DrawerContent bg="white">
            <DrawerCloseButton />
            <DrawerHeader> </DrawerHeader>

            <DrawerBody>
              <VStack spacing="4">
                <Box>
                  <Image src={Vamos} alt="Vamos" w="100px" />
                </Box>
                {currentUser?.admin ? (
                  <>
                    <Link to="/profileAdmin">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        PERFIL ADMINISTRADOR
                      </Button>
                    </Link>
                  </>
                ) : currentUser?.admin === false ? (
                  <>
                    <Link to="/profileUser">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        MI PERFIL
                      </Button>
                    </Link>
                    <Link to="/review&reseña">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        RESEÑAS
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        INICIO
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        NOSOTROS
                      </Button>
                    </Link>
                    <Link to="/questions">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        PREGUNTAS FRECUENTES
                      </Button>
                    </Link>
                  </>
                )}
                {!currentUser?.id ? (
                  <Link to="/loginviajes">
                    <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                      INICIAR SESION
                    </Button>
                  </Link>
                ) : (
                  <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                    <LogOut />
                  </Button>
                )}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default MobileNavbar;
