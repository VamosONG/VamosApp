// HOOKS
import { useDispatch} from "react-redux";
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
} from "@chakra-ui/react";
// AUTH FIREBASE
import { useAuth } from "../../../context/authContext";
//ACTIONS
import { getUserByEmail } from "../../../redux/actions";




const LoginForm = ({ onSwitchForm }) => {

  // Auth de Firebase
  const auth = useAuth();
  const {displayName, uid, operationType}= auth.user
  // console.log('operaTypr ' + operationType);
  console.log(displayName, uid);
  // Estados Locales para form de Login
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const dispatch= useDispatch()
  const navigate = useNavigate()


  const [input, setInput] = useState({
    email: "",
    password: "",
  });



  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const isError = input.email === "" || input.password === "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.login(input.email, input.password); //Destruturing del operationType de la funsion login
      const getUser= await dispatch(getUserByEmail(input.email))
      if(operationType === "signIn"){ //Modifique para redireccionar al home
        console.log(getUser);
        // navigate('/')
      
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };


  //   const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const[loginres, usuarioActual, mailres] = await Promise.all([
  //       await auth.login(input.email, input.password); //Destruturing del operationType de la funsion login
  //       const getUser= await dispatch(getUserByEmail(input.email))
  //       const 

  //     ])
 
      
  //     }
  //   } catch (error) {
  //     console.error("Error al iniciar sesión:", error.message);
  //   }
  // };


  const handleGoogleLogin = async () => {
    try {
      const google= await auth.loginWithGoogle();
      console.log(google);
      navigate("/formLogInWithGoogle")
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  const handleLogOut = async() => {
    try {
      await auth.logOut()
      navigate("/")
    } catch (error) {
      console.log("error");
    }
  }


  return (
    <Stack
      spacing={4}
      bg="#009ED1"
      p="5"
      h="auto"
      borderRadius="20"
      boxShadow="dark-lg"
      color="white"
      w={{ base: "20rem", md: "30rem" }}
    >
      <FormControl isInvalid={isError} isRequired>
        <FormLabel>Correo Electrónico</FormLabel>
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
        <FormLabel>Contraseña</FormLabel>
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

      <Button colorScheme="green" onClick={handleSubmit}>
        Entrar
      </Button>
{/* 
      <Button colorScheme="green" onClick={handleLogOut}>
        Salir
      </Button> */}
     

      <Container>
        <Text>
          ¿No tienes cuenta?{" "}
          <Button color="teal.500" onClick={onSwitchForm}>
            Registrarme
          </Button>
          <Button colorScheme="red" onClick={handleGoogleLogin}>
            Continuar con Google
          </Button>
        </Text>

      </Container>
    </Stack>
   );
};

export default LoginForm;