import { useDispatch, useSelector } from "react-redux"

import { Box, Card, CardBody, CardHeader, Center, useDisclosure, Grid, GridItem} from '@chakra-ui/react'
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

  const dispatch=useDispatch()
  
    const solicitudesDeViajes=useSelector((state)=>state.solicitudesDeViajes)
    console.log(solicitudesDeViajes)


  // const handlerClick=(id)=>{
  //   dispatch(idDeSolicitud(id)

  useEffect (()=>{
   dispatch (getSolicitudes())
  },[dispatch])


    return (
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {solicitudesDeViajes.map((trip) => (
        <GridItem key={trip.id}>
          <Card>
            <Link to="/detail">
              <CardBody>{trip.id}</CardBody>
              <CardBody>{trip.date}</CardBody>
              <CardBody>{trip.destination}</CardBody>
            </Link>
          </Card>
        </GridItem>
      ))}
    </Grid>
    )
    //   <div >
    //     <ul>

    //        {solicitudesDeViajes.map((solicitud)=>(
            
    //             <Box mt={4} key={solicitud.id}>
    //                 <Button /* colorScheme='teal' variant='outline' */ /* w='100%' */ type='submit'>
    //               <Link to='/solicitud' onClick={handlerClick(solicitud.id)}>
    //                   {/* <Solicitud solicitud={solicitud}/> */}
    //                   Solicitud de viaje {solicitud.id}
    //               </Link>
    //                 </Button>
    //         </Box>
    //        ))}
    //     </ul>
    //        {/* <DetailChofer></DetailChofer> */}
    //   </div>
      
    // )
  }
  
export default SolicitudesDeViajes