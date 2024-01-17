import { useDispatch, useSelector } from "react-redux"

import { Box, Card, CardBody, CardHeader, Center, useDisclosure, Grid, GridItem } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  Input, Select, Button, Heading, Stack
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Solicitud from "./solicitud"
import DetailChofer from "../../views/detailChofer/DetailChofer"
import { getSolicitudes, idDeSolicitud } from "../../redux/actions"
import { useEffect } from "react"




function SolicitudesDeViajes() {

  const dispatch = useDispatch()

  const solicitudesDeViajes = useSelector((state) => state.solicitudesDeViajes)
  console.log(solicitudesDeViajes)


  const handlerClick=(id)=>{
    dispatch(idDeSolicitud(id))
  }

  useEffect(() => {
    dispatch(getSolicitudes())
  }, [/* dispatch */])

  const estiloParrafo = {
    /* backgroundColor: '#81DAF5', */
    backgroundColor: '#009ED1',
    padding: '10px',
    color: 'white',
  };

  const estiloTarjeta = {
    marginBottom: "30px", 
  };


  return (
    <div >
      <ul>

        {solicitudesDeViajes.map((solicitud) => (

          <Box mt={4} key={solicitud.id} style={estiloTarjeta}>
              <Link to='/solicitud' onClick={handlerClick(solicitud.id)}>
            <Button /* colorScheme='teal' variant='outline' */ /* w='100%' */ type='submit'>
            | ASIGNAR CONDUCTOR | 
            <p style={estiloParrafo}>
            Solicitud de viaje desde {solicitud.origin} hacia {solicitud.destination} ||
            Usuario: Carlitos || Fecha : {solicitud.date} || Hora: {solicitud.hour} || 
            </p>
            </Button>
            
              </Link>
          </Box>
        ))}
      </ul>
      {/* <DetailChofer></DetailChofer> */}
    </div>

  )
}

export default SolicitudesDeViajes