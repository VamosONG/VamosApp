import { useDispatch, useSelector } from "react-redux"

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
import { idDeSolicitud } from "../../redux/actions"




function SolicitudesDeViajes() {

  const dispatch=useDispatch()
  
    const solicitudesDeViajes=useSelector((state)=>state.solicitudesDeViajes)
    console.log(solicitudesDeViajes)


  const handlerClick=(id)=>{
    dispatch(idDeSolicitud(id))

  }
  

    return (
  
      <div >
        <ul>

           {solicitudesDeViajes.map((solicitud,index)=>(
            
                <Box mt={4} key={index}>
                    <Button /* colorScheme='teal' variant='outline' */ /* w='100%' */ type='submit'>
                  <Link to='/solicitud' onClick={handlerClick(solicitud.id)}>
                      {/* <Solicitud solicitud={solicitud}/> */}
                      Solicitud de viaje {solicitud.id}
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