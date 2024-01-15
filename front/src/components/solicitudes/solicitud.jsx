
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




function Solicitud({ solicitud }) {


  // const {id,origen,destination,date,hour,quantityPassengers}=solicitud
  // console.log(date) 

  const id = useSelector((state) => state.idSolicitud)
  const solicitudesDeViajes = useSelector((state) => state.solicitudesDeViajes)
  const conductores = useSelector((state) => state.conductores)


  const solicitudFound = solicitudesDeViajes.find((solicitud) => solicitud.id === id)
  console.log(solicitudFound)

  const { origin, destination, date, hour, quantityPassengers } = solicitudFound

  let aeropuertoSolicitud

  if (origin === 'Aeropuerto Talara' || origin === 'Aeropuerto Tumbes') { aeropuertoSolicitud = origin }
  else { aeropuertoSolicitud = destination }

  const conductoresFiltrados = conductores.filter((conductor) => conductor.aeropuertoOrigen === aeropuertoSolicitud)
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
        <CardBody>{origin}</CardBody>
        <CardBody>{destination}</CardBody>
        <CardBody>{date}</CardBody>
        <CardBody>{hour}</CardBody>
        <CardBody>{quantityPassengers}</CardBody>
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