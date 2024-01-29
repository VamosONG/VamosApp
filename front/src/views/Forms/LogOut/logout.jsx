import { IconButton, Button, Stack,Icon } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import {  useDispatch } from "react-redux";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import { cleanCurrentUser } from '../../../redux/actions';
import Swal from "sweetalert2";

const LogOut = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const dispatch = useDispatch();


  const handleLogOut = async () => {
    try {
      await auth.logOut();  // Asumo que tu función logOut está implementada correctamente en useAuth

          Swal.fire({
            title: "Log out exitoso!",
            icon: "success"
          });

      // Limpiar el estado de Redux
    dispatch(cleanCurrentUser());


      // Redirigir al usuario a la página de inicio
      navigate("/");
    } catch (error) {
      console.error(`Error al cerrar sesión: ${error.message}`);
    }
  };
  

  return (
    <Stack direction="row" spacing={4}>
      {/* <IconButton
        variant="solid"
        aria-label="Cerrar sesión"
        icon={<Icon as={FaSignOutAlt} />}
        
      /> */}
      <Button onClick={handleLogOut}
      aria-label="Cerrar sesión"
      rightIcon={<FaSignOutAlt/>}>
        Cerrar Sesión
      </Button>
    </Stack>
  );
};

export default LogOut;
