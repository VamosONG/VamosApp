import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Vamos from "../../../assets/logoblanco.png";

const MobileNavbar = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <Box maxW="1400px" minW="375px" width="100%" marginX="auto" bg="#009ED1">
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
                {currentUser && currentUser.admin ? (
                  <>
                    <Link to="/solicitudesDeViajes">
                      <Button colorScheme="#009ED1" w="100%">
                        SOLICITUDES DE VIAJE
                      </Button>
                    </Link>
                    <Link to="/detail">
                      <Button colorScheme="#009ED1" w="100%">
                        CONDUCTORES
                      </Button>
                    </Link>
                    <Link to="/reservas">
                      <Button colorScheme="#009ED1" w="100%">
                        RESERVAS
                      </Button>
                    </Link>
                  </>
                ) : currentUser && currentUser.admin === false ? (
                  <>
                    <Link to="/solicitarViaje">
                      <Button colorScheme="#009ED1" w="100%">
                        SOLICITAR VIAJE
                      </Button>
                    </Link>
                    <Link to="/perfil">
                      <Button colorScheme="#009ED1" w="100%">
                        MI PERFIL
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

                <Link to="/perfil">
                  <Button colorScheme="#009ED1" w="100%">
                    MI PERFIL
                  </Button>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
