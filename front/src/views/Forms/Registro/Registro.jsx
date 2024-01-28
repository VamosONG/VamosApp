//DEPENDENCIES
import axios from "axios";

//Styles
import Swal from "sweetalert2";
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  InputGroup,
  Button,
  InputRightElement,
  Stack,
  Text,
  Flex,
  Box,
  Divider,
  AbsoluteCenter,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
//HOOKS
import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getUserByEmail } from "../../../redux/actions";
import googleLogo from "../../../assets/icons/google.png";

const RegistroForm = ({ onSwitchForm }) => {


  //  estado loca Input para setear la info del form y enviarla por body al back y crear el usuario

  const [input, setInput] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    dni: "",
  });


// setea los inputs con los valores q se van escribiendo
  const handleInputChange = (e) => {
    e.preventDefault();
    const property = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [property]: value,
    });
  };

  const isError = input === "";

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch=useDispatch()
  const navigate = useNavigate();

  //Autenticacion
  const auth = useAuth();
  const { displayName } = auth.user;

// funcion para que al registrarse se envien los datos del usuario
  const handleSubmit = async (e) => {
    e.preventDefault();

let dataUser = {};

    Promise.all([
      auth.register(input.email, input.password),  //registrarse con email y con password por firebase
      axios.post(`http://localhost:3001/user/create`, input) // post con los inputs para crear el usuario
    ])
      .then(([authResponse, { data }]) => {
        dispatch(getUserByEmail(input.email))  // get con el input para setear el current user 
        console.log("input data", input);
        console.log(data);
        Swal.fire({
          title: "Bien hecho!",
          text: "Datos registrados!",
          icon: "success",
        });  

        navigate("/")
       
      })
      .then((response) => {
        console.log("Mail enviado");// respuesta de send-mail aquí
        console.log(response);
      })
      .catch((error) => {
        console.log("error no se pudo cargar");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error en el registro",
        });
      });
    }
    

  return (
    <form onSubmit={handleSubmit}>
      
      <Flex
      bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg"
      justify="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      >

      <Flex
      direction={{ base: "column", md: "row" }}  // Cambiado a dirección de columna para dispositivos móviles
      align="center"
      p={{ base: 4, md: 120 }}  // Ajustado el relleno para dispositivos móviles
      marginTop="30px"
      
      >
      <Flex align="center" justify="center" display={{ base: "none", md: "flex" }}>
        <Image 
        src="https://res.cloudinary.com/drgnsbah9/image/upload/v1706386608/Vamos/paroh1nlxjsyzeqdv6v5.png" 
        alt="Descripción de la imagen" 
        width="400px"
        height="596px"
        objectFit="cover"
        />
      </Flex>

      <Stack
        spacing={2}
        bg='#009ED1'
        p={{ base: 4, md: 5 }}
        borderRadius={{ base: "none", md: "none" }}
        boxShadow="dark-lg"
        w={{ base: "100%", md: "25rem" }}
        color="Black"
      >

        <Heading 
        fontSize="2xl" 
        fontFamily="'DIN Alternate Black', sans-serif"
        >REGISTRATE!</Heading>
        <FormControl isInvalid={isError} isRequired>
          <FormLabel 
          fontSize="1xl"
          fontFamily="'DIN Medium',"
          >Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            placeholder="Nombre"
            bg="white"
          />
          {!isError ? (
            <FormErrorMessage>Por favor ingrese su nombre.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isInvalid={isError} isRequired>
          <FormLabel 
          fontSize="1xl"
          fontFamily="'DIN Medium',"
          >Apellido</FormLabel>
          <Input
            type="text"
            name="surname"
            value={input.surname}
            onChange={handleInputChange}
            placeholder="Apellido"
            bg="white"
          />
          {!isError ? (
            <FormErrorMessage>Por favor ingrese su apellido.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel 
          fontSize="1xl"
          fontFamily="'DIN Medium',"
          >Telefono</FormLabel>
          <Input
            type="number"
            name="phone"
            value={input.phone}
            placeholder="Teléfono."
            onChange={handleInputChange}
            bg="white"
          />
          {isError ? (
            <FormErrorMessage>Por favor ingrese su número de teléfono.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>

          <FormLabel 
          fontSize="1xl"
          fontFamily="'DIN Medium',"
          >Correo electrónico</FormLabel>
          <Input
            type="mail"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="Email"
            bg="white"
          />
          {isError ? (
            <FormErrorMessage>Por favor ingrese su email.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel 
          fontSize="1xl"
          fontFamily="'DIN Medium',"
          >DNI</FormLabel>
          <Input
            type="number"
            name="dni"
            value={input.dni}
            placeholder="DNI."
            onChange={handleInputChange}
            bg="white"
          />
          {isError ? (
            <FormErrorMessage>Por favor ingrese su DNI.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel 
          fontSize="1xl"
          fontFamily="'DIN Medium',"
          >Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Ingrese una contraseña"
              onChange={handleInputChange}
              name="password"
              value={input.password}
              bg="white"
            />
            <InputRightElement width="4.5rem">
            <Button
            h="1.75rem"
            size="sm"
            onClick={handleClick}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            >
            {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button 
        fontSize="1xl" 
        bg='#E83D6F'
        type="submit"
        fontFamily="'DIN Medium',"
        >
          ENVIAR
        </Button>
      </Stack>
      </Flex>
      </Flex>

    </form>
  );
};

export default RegistroForm;
