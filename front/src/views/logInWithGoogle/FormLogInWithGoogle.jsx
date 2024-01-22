import Swal from "sweetalert2";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Stack,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getUserByEmail } from "../../redux/actions";


const FormLogInWithGoogle = () => {
  const dispatch = useDispatch();
  //Autenticacion
  const auth = useAuth();
  const { displayName } = auth.user;

  const navigate = useNavigate();
  const bgImg ="https://res.cloudinary.com/drgnsbah9/image/upload/v1705691983/Vamos/kzcet8fc06pg0uh5jki3.jpg"

  const [input, setInput] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    // password: '',
    dni: "",
  });
  //  surname, email, phone, dni

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });
  };

  const isError = input === "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCreated = await axios.post(
        `http://localhost:3001/user/create`,
        input
      );
      await dispatch(getUserByEmail(input.email));
      console.log(userCreated);
      console.log("usuario:", { displayName });
      if (userCreated) {
        Swal.fire({
          title: "Bien hecho!",
          text: "Datos registrados!",
          icon: "success",
        });

        navigate("/");
        setInput({
          name: "",
          surname: "",
          phone: "",
          email: "",
          // password: '',
          dni: "",
        });
      } else {
        Swal.fire({
          title: "Error al crear usuario!",
          text: "no se registro!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(input);
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error en el registro",
      });
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <Flex 
        justify="center"
        alignContent="center"
        p={20}
        bgImage={bgImg}
        >
      <Stack
        spacing={4}
        bg="rgb(0, 158, 209, 0.6)"
        p="5"
        h="auto"
        borderRadius="2%"
        boxShadow="dark-lg"
        w={{ base: "20rem", md: "30rem" }}
        color="black"
        >
        <Heading fontSize="xl">REGISTRO DE DATOS</Heading>
        <FormControl isInvalid={isError} isRequired>
          <FormLabel fontSize="large">Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            placeholder="Ingresa tu name"
          />
          {!isError ? (
            <FormErrorMessage>Es necesario tu name</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isInvalid={isError} isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            name="surname"
            value={input.surname}
            onChange={handleInputChange}
            placeholder="Ingresa tu name"
          />
          {!isError ? (
            <FormErrorMessage>Es necesario tu surname</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>phone</FormLabel>
          <Input
            type="number"
            name="phone"
            value={input.phone}
            placeholder="Ingresa tu nuemro de celular."
            onChange={handleInputChange}
          />
          {isError ? (
            <FormErrorMessage>Es necesario tu numero de phone</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Correo Electronico</FormLabel>
          <Input
            type="mail"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="Ingresa tu email"
          />
          {isError ? (
            <FormErrorMessage>El email es requerido.</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>DNI</FormLabel>
          <Input
            type="number"
            name="dni"
            value={input.dni}
            placeholder="Ingresa tu nuemro de celular."
            onChange={handleInputChange}
          />
          {isError ? (
            <FormErrorMessage>Es necesario tu numero de DNI</FormErrorMessage>
          ) : null}
        </FormControl>

        <Button bg="rgb(0, 290, 209, 0.6)" type="submit" fontSize="xl" disabled={!input.name || !input.surname || !input.dni || !input}>
          ENVIAR
        </Button>
      </Stack>
      </Flex>
    </form>
  );
};
export default FormLogInWithGoogle;
