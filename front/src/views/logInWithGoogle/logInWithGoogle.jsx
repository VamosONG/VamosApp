import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import { getUserByEmail } from "../../redux/actions";
import Swal from "sweetalert2";
import googleLogo from "../../../assets/icons/google.png";

const FormLogInWithGoogle = () => {
  const dispatch = useDispatch();
  const auth = useAuth();

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
      email: googleLog.user.email
     }
     console.log(usr)

     Swal.fire({
      position: "center",
      icon: "success",
      title: "Login exitoso",
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

  return (
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
  )
};
export default FormLogInWithGoogle;
