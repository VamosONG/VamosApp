// HOOKS
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";

// STYLES
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Stack,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";
// AUTH FIREBASE
import { useAuth } from "../../../context/authContext";

//ACTIONS
import { cleanCurrentUser, getUserByEmail } from "../../../redux/actions";
// DEPENDENCIES
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = ({ onSwitchForm }) => {
  // Auth de Firebase
  const auth = useAuth();

  // Estados Locales para form de Login
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // estado global con el usuario actual  fijado por getUserByEmail
  const { currentUser } = useSelector((state) => state);

  // estado local para setear los inputs del formulario
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // esta funcion setea los inputs del formulario
  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const isError = input.email === "" || input.password === "";

  // Cuando se envia el form . Esta funcion es para login cuando ya esta registrado
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.login(input.email, input.password); // autenticacion de loginWithGoogle funcion de firebase signInWithPopUp
        const getUser = await dispatch(getUserByEmail(input.email)); // busca al usuario por email y lo setea como currentUser
        console.log(getUser);
        // navigate('/')
      


    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  //esta funcion es para hacer el login con google y almacenarlo en nuestra db
    const handleGoogleLogin = async () => {

    const {displayName, email} = auth.user
    try {
      await auth.loginWithGoogle(); // Autenticacion de google
      if (auth.user) {
        const user = {   // creaacion de un objeto user con los datos que puedo extraer de firebase
          name: displayName,
          email: email,
        };

        //Crea un usuario (findOrCreate) utilizando fetch con su metodo post 
        const response = await fetch('http://localhost:3001/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user) 
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userCreated = await response.json();
  
        // Carga el estado global currentUser con la info del usuario registradi
        const userActual = await dispatch(getUserByEmail(userCreated.email))
        console.log(userActual);
  
        return userActual
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error en el registro",
      });
    }
  };


  

  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogOut = async() => {
    try {
      await auth.logOut()
      dispatch(cleanCurrentUser({}))
      navigate("/")
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <Stack
      spacing={4}
      bg="rgb(0, 158, 209)"
      p="5"
      h="auto"
      borderRadius="2%"
      boxShadow="dark-lg"
      color="white"
      w={{ base: "20rem", md: "30rem" }}
    >
      {!currentUser.id && (
        <>
          <FormControl isInvalid={isError}>
            <FormLabel fontSize="xl">Correo Electrónico</FormLabel>
            <Input
              type="text"
              value={input.email}
              onChange={handleInputChange}
              placeholder="Ingresa tu Correo / Email"
              name="email"
            />
            {isError ? (
              <FormErrorMessage>El correo es requerido.</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl isInvalid={isError} isRequired>
            <FormLabel fontSize="xl">Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Ingresa una contraseña"
                name="password"
                onChange={handleInputChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Container>
            <Text>
              ¿No tienes cuenta?{" "}
              <Button color="teal.500" onClick={handleRegister}>
                Registrarme
              </Button>
              <Button colorScheme="red" onClick={handleGoogleLogin}>
                Continuar con Google
              </Button>
            </Text>
          </Container>
          <Box>
            {!currentUser.id && (
              <Button colorScheme="green" onClick={handleSubmit}>
                Entrar
              </Button>
            )}
          </Box>
        </>
      )}{" "}
      {currentUser.id && (
        <Box>
          <Heading fontSize="xl">{currentUser.name}</Heading>
          <Text fontSize="xl">{currentUser.email}</Text>
        </Box>
      )}
    </Stack>
  );
};

export default LoginForm;
