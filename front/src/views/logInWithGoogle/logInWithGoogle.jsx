import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import { getUserByEmail } from "../../redux/actions";

const FormLogInWithGoogle = () => {
  const dispatch = useDispatch();
  const auth = useAuth();

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


  return (
    <Button onClick={handleGoogleLogin}>
      Continuar con google
    </Button>
  )
};
export default FormLogInWithGoogle;
