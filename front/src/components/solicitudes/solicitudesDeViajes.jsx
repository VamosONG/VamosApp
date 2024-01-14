import { useSelector } from "react-redux"

import { Box, Center, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom" 
import Solicitud from "./solicitud"
import DetailChofer from "../../views/detailChofer/DetailChofer"




function SolicitudesDeViajes() {
  
    const solicitudesDeViajes=useSelector((state)=>state.solicitudesDeViajes)
    console.log(solicitudesDeViajes)
    return (
  
      <div >
        <ul>

           {solicitudesDeViajes.map((solicitud)=>(
                <Box mt={4}>
                    <Button /* colorScheme='teal' variant='outline' */ /* w='100%' */ type='submit'>
                  <Link to='/detail'>
                      <Solicitud solicitud={solicitud}/>
                  </Link>
                    </Button>
            </Box>
           ))}
        </ul>
           {/* <DetailChofer></DetailChofer> */}
      </div>
      
    )
  }
  
export default SolicitudesDeViajes