import { IconButton, Button, Stack,Icon } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import { cleanCurrentUser } from '../../../redux/actions';

const LogOut = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state);

  const handleLogOut = async () => {
    try {
      await auth.logOut();  // Asumo que tu función logOut está implementada correctamente en useAuth

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
      <IconButton
        variant="solid"
        aria-label="Cerrar sesión"
        icon={<Icon as={FaSignOutAlt} />}
        onClick={handleLogOut}
      />
    </Stack>
  );
};

export default LogOut;
