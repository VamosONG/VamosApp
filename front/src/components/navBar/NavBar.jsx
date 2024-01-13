import {
  Button,
  Flex,
  AvatarGroup,
  Avatar,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Vamos from "../../assets/Vamos.png";
import SlideEx from "../../views/Forms/ViewForm";
import { useSelector } from "react-redux";
//import LoginForm from "../../views/Forms/Login/Login";

const NavBar = () => {
  const esAdmin = useSelector((state) => state.esAdmin);
  const esUsuario = useSelector((state) => state.esUsuario);

  return (
    <Flex
      as="nav"
      bg="#009ED1"
      alignItems="center"
      justify="space-between"
      h="100px"
    >
      <Box>
        <Image src={Vamos} alt="Vamos" w="200px" />
      </Box>

      <Flex justify="space-between">
        {esAdmin ? (
          <Box>
            <Link to="/solicitudesDeViajes">
              <Button colorScheme="#009ED1">Solicitudes de viaje</Button>
            </Link>
          </Box>
        ) : esUsuario ? (
          <Box>
            <Link to="/solicitarViaje">
              <Button colorScheme="#009ED1">Solicitar viaje</Button>
            </Link>
          </Box>
        ) : null}

        {
          esAdmin?
          (<Box>
            <Link to="/detail">
            <Button  colorScheme="#009ED1">Conductores</Button>
            </Link>
          </Box>)
          : null
        }

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

        <Link to="/frecuentes">
          <Button colorScheme="#009ED1">Preguntas Frecuentes</Button>
        </Link>
        <Link to="/about">
          <Button colorScheme="#009ED1">Nosotros</Button>
        </Link>
      </Flex>

      <AvatarGroup spacing="1rem" mx="20px">
        <Avatar bg="#009ED1" />
        <SlideEx />
      </AvatarGroup>
    </Flex>
  );
};
export default NavBar;