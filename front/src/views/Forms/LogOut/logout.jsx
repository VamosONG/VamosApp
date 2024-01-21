import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import { logOutAction } from '../../../redux/actions'
import { useAuth } from '../../../context/authContext'
import { useNavigate } from 'react-router'
import NavBar from '../../../components/navBar/NavBar'

//import { unstable_HistoryRouter } from 'react-router-dom'


const LogOut = () => {
    // const esAdmin = useSelector((state) => state.esAdmin)
    // const esUsuario = useSelector((state) => state.esUsuario)
    //const dispatch = useDispatch();
    const navigate = useNavigate()
    const auth = useAuth()
    const {currentUser} = useSelector(state=> state)

    const handleLogOut =async () => {
        try {
            //dispatch(logOutAction(esAdmin ? 'admin' : 'user'));
            await auth.logOut()
            currentUser === null
            location.href = '/';
          } catch (error) {
            console.log(`funciona${error.message}`);
          }
    }

    return (
        // import { MdBuild , MdCall } from "react-icons/md"

        <Stack direction='row' spacing={4}>
            {/* {esAdmin ? (
                <Button  colorScheme='#E83D6F' variant='solid' onClick={() => handleLogOut(true)}>
                    Salir
                </Button>)
                : ( */}
                {/* {
                    (!currentUser) &&  <NavBar/>
        
                } */}
                    <Button colorScheme='#E83D6F' variant='solid' onClick={() => handleLogOut(false)}>
                        Salir
                    </Button>
                       
                    
        </Stack>
                )
            }
//     )
// }

export default LogOut;