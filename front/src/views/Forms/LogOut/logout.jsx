import { Button, Stack, Box } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../../redux/actions";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import NavBar from '../../../components/navBar/NavBar'
import { cleanCurrentUser } from '../../../redux/actions'

//import { unstable_HistoryRouter } from 'react-router-dom'


const LogOut = () => {
    // const esAdmin = useSelector((state) => state.esAdmin)
    // const esUsuario = useSelector((state) => state.esUsuario)
    //const dispatch = useDispatch();
    const navigate = useNavigate()
    const auth = useAuth()
    const {currentUser} = useSelector(state=> state)
    const dispatch = useDispatch()

    const handleLogOut =async () => {
        try {
            //dispatch(logOutAction(esAdmin ? 'admin' : 'user'));
            await auth.logOut()
            // currentUser === null || !currentUser
            //  navigate("/")
            // location.href = '/';
            dispatch(cleanCurrentUser({}))
            navigate("/")
          
          } catch (error) {
            console.log(`funciona${error.message}`);
          }
    }

    return (
        // import { MdBuild , MdCall } from "react-icons/md"

        <Stack direction='row' spacing={4}>
            {currentUser.admin ? (
                <Button  colorScheme='#E83D6F' variant='solid' onClick={() => handleLogOut(true)}>
                    Salir
                </Button>)
                : null
            }
        </Stack>
    )
}

export default LogOut;