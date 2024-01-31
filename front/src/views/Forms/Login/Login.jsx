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
  Flex,
  Image,
  Center,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// AUTH FIREBASE
import { useAuth } from "../../../context/authContext";
import googleLogo from "../../../assets/icons/google.png";

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
        const getUser =  await dispatch(getUserByEmail(input.email)); // busca al usuario por email y lo setea como currentUser
        console.log(getUser);
         navigate('/')////
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Inicio de sesión éxitoso!",
          showConfirmButton: false,
          timer: 2500
        })

    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email o contraseña incorrecto,intentelo nuevamente.",
      });
    }
  };

  //esta funcion es para hacer el login con google y almacenarlo en nuestra db
    const handleGoogleLogin = async (e) => {
      e.preventDefault();
     
    const googleLog = await auth.loginWithGoogle(); // Autenticacion de google
    
    
    //const usuario = auth.user
    console.log("googleLog",googleLog)
    try {
      if (googleLog) {
         const usr={
          name: googleLog.user.displayName,
          email: googleLog.user.email,
          image: googleLog.user.photoURL
         }
         console.log("google" ,usr);

         Swal.fire({
          position: "center",
          icon: "success",
          title: "Inicio de sesión éxitoso",
          showConfirmButton: false,
          timer: 2500
        });
        //Crea un usuario (findOrCreate) utilizando fetch con su metodo post 
        const response = await fetch('http://localhost:3001/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usr) 
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userCreated = await response.json();
  
        // Carga el estado global currentUser con la info del usuario registradi
        const userActual = await dispatch(getUserByEmail(googleLog.user.email))

        navigate('/')////
        return response
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

  // const handleLogOut = async() => {
  //   try {
  //     await auth.logOut()
  //     dispatch(cleanCurrentUser({}))
  //     navigate("/")
  //   } catch (error) {
  //     console.log("error");
  //   }
  // }
  

  return (
    <Stack
    spacing={4}
    bg="rgb(0, 158, 209)"
    p="4"
    h="auto"
    rounded="0"
    border="none"
    boxShadow="none"
    color="white"
    display={currentUser?.id ? 'none' : 'block'}
    >
      {!currentUser?.id && (
        <>
          <FormControl isInvalid={isError}>
            <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Correo Electrónico</FormLabel>
            <Input
              bg="white"
              type="text"
              value={input.email}
              onChange={handleInputChange}
              placeholder="Ingresa tu Correo / Email"
              name="email"
              fontSize="md"
              color="black"
            />
            {isError ? (
              <FormErrorMessage 
              fontSize="md" 
              color="black"
              >
                El correo es requerido.
              </FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl isInvalid={isError} isRequired>
            <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                bg="white"
                type={show ? "text" : "password"}
                placeholder="Ingresa una contraseña"
                name="password"
                onChange={handleInputChange}
                fontSize="md"
                color="black"
              />
              <InputRightElement width="4rem">
                <Button 
                h="1rem" 
                size="lg" 
                onClick={handleClick}
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                >
                {/* {show ? <ViewOffIcon /> : <ViewIcon />} */}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Box>
            {!currentUser?.id && (
              <Button bg="white" onClick={handleSubmit} >
                Entrar
              </Button>
            )}
          </Box>

          <Center>
              <Stack>
              <Button bg='#E83D6F' onClick={handleRegister}>
                Registrarme
              </Button>
              <Button
              fontSize="1xl"
              bg="white"
              type="submit"
              fontFamily="'DIN Medium',"
              olor="black"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={3}
              borderRadius="md"
              _hover={{ bg: "gray.100" }}
              onClick={(e)=>handleGoogleLogin(e)}
              >
              <Flex align="center" mr={1}>
              <Image src={googleLogo} alt="Google Logo" boxSize="35px" mr={0} />
              </Flex>
              <Text>Continuar con Google</Text>
              </Button>
              </Stack>
          </Center>
        </>

      )}
    </Stack>
  );
};

export default LoginForm;