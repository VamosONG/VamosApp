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
  Flex
} from "@chakra-ui/react";
//HOOKS
import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getUserByEmail } from "../../../redux/actions";

const RegistroForm = ({ onSwitchForm }) => {


  const bgImg= "https://res.cloudinary.com/drgnsbah9/image/upload/v1705767597/Vamos/Aeropuerto_loqc3q.jpg"

  const [input, setInput] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    dni: "",
  });
  //  surname, email, phone, dni

  const handleInputChange = (e) => {
    e.preventDefault();
    const property = e.target.name;
    const value = e.target.value;
    console.log(property + " " + value);
    setInput({
      ...input,
      [property]: value,
    });
  };

  const isError = input === "";

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch=useDispatch()
  //Autenticacion
  const auth = useAuth();
  const { displayName } = auth.user;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dataUser = {};

    Promise.all([
      auth.register(input.email, input.password, { displayName }),
      axios.post(`http://localhost:3001/user/create`, input),
      
    ])
      .then(([authResponse, { data }]) => {
        dispatch(getUserByEmail(input.email))
        console.log("input data", input);
        console.log(data);
        Swal.fire({
          title: "Bien hecho!",
          text: "Datos registrados!",
          icon: "success",
        });
        
        dataUser = {
          userId: data.id,
          option: "signIn",
        };

        return axios.post(`http://localhost:3001/send-mail`, dataUser);
      })
      .then((response) => {
        // Maneja la respuesta de send-mail aquí
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
      justify="center"
      alignContent="center"
      p={20}
      bgImage={bgImg}
      bgSize="cover"
      bgRepeat="no-repeat"
      >
      <Stack
        spacing={4}
        bg="rgb(0, 158, 209, 0.6)"
        p="5"
        h="auto"
        borderRadius="2%"
        boxShadow="dark-lg"
        w={{ base: "20rem", md: "30rem" }}
        color="white"
      >

        <Heading fontSize="x-large">REGISTRATE!</Heading>
        <FormControl isInvalid={isError} isRequired>
          <FormLabel fontSize="xl">Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
          {!isError ? (
            <FormErrorMessage>Por favor ingrese su nombre.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isInvalid={isError} isRequired>
          <FormLabel fontSize="xl">Apellido</FormLabel>
          <Input
            type="text"
            name="surname"
            value={input.surname}
            onChange={handleInputChange}
            placeholder="Apellido"
          />
          {!isError ? (
            <FormErrorMessage>Por favor ingrese su apellido.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="xl">Telefono</FormLabel>
          <Input
            type="number"
            name="phone"
            value={input.phone}
            placeholder="Teléfono."
            onChange={handleInputChange}
          />
          {isError ? (
            <FormErrorMessage>Por favor ingrese su número de teléfono.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>

          <FormLabel fontSize="xl">Correo electrónico</FormLabel>
          <Input
            type="mail"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {isError ? (
            <FormErrorMessage>Por favor ingrese su email.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="xl">DNI</FormLabel>
          <Input
            type="number"
            name="dni"
            value={input.dni}
            placeholder="DNI."
            onChange={handleInputChange}
          />
          {isError ? (
            <FormErrorMessage>Por favor ingrese su DNI.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="xl">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="ingresa una password"
              onChange={handleInputChange}
              name="password"
              value={input.password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button fontSize="xl" bg="rgb(0, 290, 209, 0.6)" type="submit">
          ENVIAR
        </Button>
      </Stack>
      </Flex>

    </form>
  );
};

export default RegistroForm;
