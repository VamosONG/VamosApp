import {
  Button,
  Flex,
  Stack,
  AvatarGroup,
  Avatar,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex as="nav" bg="blue.200" alignItems="center" justify="space-around">
        
      <Stack direction="row" spacing={15} align="center">
        <Link to="/landing">
          <Button colorScheme="blue">Inicio</Button>
        </Link>
        <Link to="/reservas">
         <Button colorScheme="blue">Reservas</Button>
        </Link>
        <Link to="/frecuentes">
         <Button colorScheme="blue">Preguntas Frecuentes</Button>
        </Link>
        <Link to="/nosotros">
         <Button colorScheme="blue">Nosotros</Button>
        </Link>
      </Stack>

      <Spacer />
      <AvatarGroup spacing="1rem">
        <Avatar bg="teal.500" />
      </AvatarGroup>
      <Box>User</Box>
    </Flex>
  );
};
export default NavBar;
