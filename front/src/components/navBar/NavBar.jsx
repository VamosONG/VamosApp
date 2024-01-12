import {
  Button,
  Flex,
  AvatarGroup,
  Avatar,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Vamos from "../../assets/Vamos.png"
import SlideEx from "../../views/Forms/ViewForm";
//import LoginForm from "../../views/Forms/Login/Login";

const NavBar = () => {
  
  return (
    <Flex as="nav" bg="#009ED1" alignItems="center" justify="space-between" h="100px" >
    <Box >
        <Image src={Vamos} alt="Vamos" w= "200px"/>
    </Box >

    <Box h="15%" w="45%">
      <SlideEx/>
    </Box>

    <Box>
        <Link to="/landing">
          <Button colorScheme="#009ED1">Inicio</Button>
        </Link>
     </Box>

     <Box>
        <Link to="/reservas">
         <Button colorScheme="#009ED1">Reservas</Button>
        </Link>
      </Box>

      <Box>
        <Link to="/frecuentes">
         <Button colorScheme="#009ED1">Preguntas Frecuentes</Button>
        </Link>
      </Box>

      <Box>  
      <Link to="/about">
         <Button colorScheme="#009ED1">Nosotros</Button>
        </Link>
      </Box> 
      
      <AvatarGroup spacing="1rem">
        <Avatar bg="#009ED1" />
      <Link to="/login">
      <Button colorScheme="#009ED1" mx="10px">Ingresar</Button>
      </Link>
      </AvatarGroup>
    </Flex>
  );
};
export default NavBar;
