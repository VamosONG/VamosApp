import React, { useState, useEffect, useRef } from "react";

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
  Text,
  AvatarGroup,
  useDisclosure,
  Avatar,
  
} from "@chakra-ui/react";
import {
  QuestionIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  ChevronDownIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import LoginForm from "../../../views/Forms/Login/Login";
import RegistroForm from "../../../views/Forms/Registro/Registro";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Vamos from "../../../assets/logo.png";
import { useSelector } from "react-redux";
import LogOut from "../../../views/Forms/LogOut/logout";
import LoginViajes from "../../../views/Forms/Login/LoginViajes";
import User from "../../../assets/user.png"

const MobileNavbar = () => {
  const [isOpen2, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser } = useSelector(state => state);
  const btnRef = useRef();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

   const handleSwitchForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
};

  const onToggleDrawer = () => {
    setIsOpen(!isOpen2);
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
      bg="tranparent"
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

      <Button
                ref={btnRef}
                onClick={onOpen}
                w={"50px"}
                h="50px"
                borderRadius={50}
            >
                <Avatar bg="white" name={currentUser.name} src={User ? User : null} />

            </Button>
            {currentUser?.id ?
                <>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent
                            p="4px"
                            color="white"
                            bg="white"
                            rounded="md"
                            shadow="md"
                            maxWidth={"200px"}
                            w={"auto"}
                            h={"max-content"}
                            position="fixed"
                            top="0"
                            right="0"
                            bottom="0"
                        >
                            <DrawerCloseButton />
                            <DrawerHeader color={"black"}>Hola {currentUser.name}</DrawerHeader>

                            <DrawerBody>
                                <Box>
                                    <Flex flexDirection={"column"} gap={2}>
                                        {currentUser.admin && currentUser.admin === true ? (
                                            <>
                                                <Link to="/profileAdmin">
                                                    <Button
                                                        w={"100%"}
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                        bgColor={"#AEE56F"}
                                                    >
                                                        <Text>Panel</Text>
                                                        <ViewIcon />
                                                    </Button>
                                                </Link>
                                                <LogOut />
                                            </>
                                        ) : currentUser.admin === false ? (
                                            <>
                                                <Link to="/profileUser">
                                                    <Button
                                                        w={"100%"}
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                        bgColor={"#AEE56F"}
                                                    >
                                                        <Text>Mi perfil</Text>
                                                        <ViewIcon />
                                                    </Button>
                                                </Link>

                                               
                                                <LogOut />
                                            </>
                                        ) : null}
                                    </Flex>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </> :
                <>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef} >
                        <DrawerOverlay />
                        <DrawerContent
                            mt='2'
                            w='auto'
                            
                            overflow='hidden'
                            position='absolute'
                            right='2rem'
                            borderRadius={0}
                            h={"max-content"}
                            bg="white">
                                
                            <DrawerBody>
                                <Box>
                                    {/* Validacion para mostrar formularios */}
                                    {isLoginFormVisible ? (
                                        <>
                                            <LoginForm onSwitchForm={handleSwitchForm} />
                                        </>
                                    ) : (
                                        <>
                                            <RegistroForm onSwitchForm={handleSwitchForm} />
                                        </>
                                    )}
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>}

      <Drawer  isOpen={isOpen2} placement="top" onClose={onCloseDrawer}>
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
                  <Link to="/">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        INICIO
                      </Button>
                    </Link>
                    <Link to="/profileUser">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        MI PERFIL
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        SOBRE NOSOTROS
                      </Button>
                    </Link>
                    <Link to="/questions">
                      <Button colorScheme="#009ED1" color="black" w="100%"> {/* Cambio del color del texto a negro */}
                        PREGUNTAS FRECUENTES
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
