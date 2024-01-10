import {
  Button,
  Flex,
  Stack,
  AvatarGroup,
  Avatar,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Vamos from "../../assets/Vamos.png"

const NavBar = () => {
  
  return (
    <Flex as="nav" bg="#009ED1" alignItems="center" justify="space-between" h="100px">
    <Box w="150px" >
        <Image src={Vamos} alt="Vamos" w= "200px"/>
    </Box>
      <Stack direction="row"  align="center">
        <Link to="/landing">
          <Button colorScheme="blue">Inicio</Button>
        </Link>
        <Link to="/reservas">
         <Button colorScheme="#009ED1">Reservas</Button>
        </Link>
        <Link to="/frecuentes">
         <Button colorScheme="pink">Preguntas Frecuentes</Button>
        </Link>
        <Link to="/nosotros">
         <Button colorScheme="blue">Nosotros</Button>
        </Link>
      </Stack>
      
      <AvatarGroup spacing="1rem">
        <Avatar bg="#009ED1" />
      <Link to="/login">
      <Button colorScheme="blue" mr="10px">Login</Button>
      </Link>
      </AvatarGroup>
    </Flex>
  );
};
export default NavBar;
