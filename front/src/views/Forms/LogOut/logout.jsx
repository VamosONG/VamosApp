import { Button, Stack } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../../redux/actions";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";

const LogOut = () => {
//   const esAdmin = useSelector((state) => state.esAdmin);
//   //  const esUsuario = useSelector((state) => state.esUsuario)
//   const dispatch = useDispatch();
  const auth = useAuth();
  const navigate= useNavigate()
  const { currentUser}= useSelector(state => state)

  const handleLogOut = async() => {
    try {
      await auth.logOut()
      navigate("/")
    } catch (error) {
      console.log("error");
    }
  }

  return (
    // import { MdBuild , MdCall } from "react-icons/md"

    <Stack direction="row" spacing={4}>
     {currentUser.admin ? (
        <Button colorScheme="#E83D6F" variant="solid" onClick={handleLogOut}>
          Salir
        </Button>
     ) : null
     }


    </Stack>
  );
};

export default LogOut;