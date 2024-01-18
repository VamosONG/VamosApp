import { useState } from "react";
import { useDispatch } from "react-redux";

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
} from "@chakra-ui/react";
import { useAuth } from "../../../context/authContext";
import LogOut from "../LogOut/logout";
import { postNewUser } from "../../../redux/actions";


const LoginForm = ({ onSwitchForm }) => {

  // Auth de Firebase
  const auth = useAuth();
  const {displayName, uid, email}= auth.user
  console.log(displayName, uid);
  // Estados Locales para form de Login
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch()

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
      await auth.login(input.email, input.password);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };


  const handleGoogleLogin = async () => {
    try {
      const google= await auth.loginWithGoogle();
      console.log(google);
       dispatch(postNewUser({google
        // // name:displayName,
        // // email: email,
        // id:uid
      }))
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  // const handleLogOut = async() => {
  //   try {
  //     await auth.logOut()
  //   } catch (error) {
  //     console.log("error");
  //   }
  // }

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

  //   <form>
  //     <label>Mail</label>
  //     <input     type="text"
  //         value={input.email}
  //         onChange={handleInputChange}
  //         placeholder="Ingresa tu Correo / Email"
  //         name="email"/>
  //     <label>Password</label>
  //     <input
  //           type={show ? "text" : "password"}
  //           placeholder="Ingresa una contraseña"
  //           name="password"
  //           onChange={handleInputChange}/>
  //           <Button onClick={handleSubmit}>Entrar</Button>
  //           <Button onClick={handleGoogleLogin}>Continuar con Google</Button>
  //           <Button onClick={handleLogOut}>Salir</Button>
            
  //           {
  //             email && displayName && <h1>ADENTRO</h1>
  
  //           }
  //   </form>
   );
};

export default LoginForm;