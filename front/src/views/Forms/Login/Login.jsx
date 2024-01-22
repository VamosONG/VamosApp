// HOOKS
import { useDispatch, useSelector} from "react-redux";
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
  Box,
  Heading
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

  const {currentUser} = useSelector(state => state)


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

  const handleGoogleLogin = async () => {
    try {
      const google= await auth.loginWithGoogle();
      console.log(google);
      navigate("/formLogInWithGoogle")
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  const handleRegister = () => {
    navigate("/register")
  }


  return (
    <Stack
      spacing={4}
      bg="rgb(0, 158, 209, 0.8)"
      p="5"
      h="auto"
      borderRadius="2%"
      boxShadow="dark-lg"
      color="white"
      w={{ base: "20rem", md: "30rem" }}
    >
    {!currentUser.id &&
      <>
      <FormControl isInvalid={isError} isRequired>
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
        <FormLabel fontSize="xl" >Contraseña</FormLabel>
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

 

{/* /* 
      <Button colorScheme="green" onClick={handleLogOut}>
        Salir
      </Button> */} 
     

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
      {!currentUser.id && 
        (<Button colorScheme="green" onClick={handleSubmit}>
        Entrar
        </Button>)
      }
      </Box>
      </>
} {
  currentUser.id &&
  <Box>
    <Heading fontSize="xl">{currentUser.name}</Heading>
    <Text fontSize="xl">{currentUser.email}</Text>
  </Box>
}
    </Stack>
   );
};

export default LoginForm;