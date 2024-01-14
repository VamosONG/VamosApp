
import Swal from 'sweetalert2'
import { Link } from "react-router-dom" 

import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
  } from "@chakra-ui/react";
  import { getAllConductores, postNewViaje } from "../../redux/actions";
  import { useDispatch, useSelector } from "react-redux";




function Solicitud({solicitud}) {
  
    
    /* const {id,origen,destino,fecha,hora,cantPasajeros}=solicitud
    console.log(fecha) */

    const id=useSelector((state)=>state.idSolicitud)
    const solicitudesDeViajes=useSelector((state)=>state.solicitudesDeViajes)
    const conductores=useSelector((state)=>state.conductores)

    
    const solicitudFound=solicitudesDeViajes.find((solicitud)=>solicitud.id===id)
    console.log(solicitudFound)
    
    const {origen,destino,fecha,hora,cantPasajeros}= solicitudFound

    let aeropuertoSolicitud

    if(origen==='Aeropuerto Talara'||origen==='Aeropuerto Tumbes') {aeropuertoSolicitud=origen}
    else{aeropuertoSolicitud=destino}
    
    const conductoresFiltrados= conductores.filter((conductor)=>conductor.aeropuertoOrigen===aeropuertoSolicitud)
    return (
  
      <div >
        <Card
          key={id}
          direction='row'
          h='10%'
          w='1%'
        >
          <CardHeader /* size="md" */>solicitud</CardHeader>
          <CardBody  >{id}</CardBody>
          <CardBody>{origen}</CardBody>
          <CardBody>{destino}</CardBody>
          <CardBody>{fecha}</CardBody>
          <CardBody>{hora}</CardBody>
          <CardBody>{cantPasajeros}</CardBody>
          <CardFooter>
            
          </CardFooter>
        </Card>
        {conductoresFiltrados.map((conductor) => (
        <Card
          key={conductor.id}
         direction="column" 
         overflow="hidden"
         variant="outline"
         maxW='sm'
        >
          <CardHeader size="md">{conductor.nombre}</CardHeader>
          <CardBody>{conductor.apellido}</CardBody>
          <CardBody>{conductor.numeroCelular}</CardBody>
          <CardBody>{conductor.maxPasajeros}</CardBody>
          <CardBody>{conductor.aeropuertoOrigen}</CardBody>
          <CardBody>{conductor.fotoChofer}</CardBody>
          <CardFooter>
            {/* <Checkbox
            
            ></Checkbox> */}
          </CardFooter>
        </Card>
        ))}
      </div>
      
    )
  }
  
export default Solicitud