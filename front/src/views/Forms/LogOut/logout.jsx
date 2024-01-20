import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import { logOutAction } from '../../../redux/actions'


const LogOut = () => {
    const esAdmin = useSelector((state) => state.esAdmin)
    const esUsuario = useSelector((state) => state.esUsuario)
    const dispatch = useDispatch();

    const handleLogOut =async (esAdmin) => {
        try {
            dispatch(logOutAction(esAdmin ? 'admin' : 'user'));
            await auth.logOut()
          } catch (error) {
            console.log("error");
          }
    }


    return (
        // import { MdBuild , MdCall } from "react-icons/md"

        <Stack direction='row' spacing={4}>
            {esAdmin ? (
                <Button  colorScheme='#E83D6F' variant='solid' onClick={() => handleLogOut(true)}>
                    Salir
                </Button>)
                : (
                    <Button colorScheme='#E83D6F' variant='solid' onClick={() => handleLogOut(false)}>
                        Salir
                    </Button>
                )
            }
        </Stack>
    )
}

export default LogOut;