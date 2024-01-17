
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Checkbox,
  Button
} from "@chakra-ui/react";
import { filtrarConductores, getAllConductores, postNewViaje } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';




const Solicitud =()=> {

  const dispatch=useDispatch()
  // const {id,origen,destination,date,hour,quantityPassengers}=solicitud
  // console.log(date) 

  const id = useSelector((state) => state.idSolicitud)
  console.log(id)
  const solicitudesDeViajes = useSelector((state) => state.solicitudesDeViajes)
  const conductores = useSelector((state) => state.conductoresFiltrados)


  const solicitudFound = solicitudesDeViajes.find((solicitud) => solicitud.id === id)
  console.log(solicitudFound)

  const { origin, destination, date, hour, quantityPassengers } = solicitudFound

  let aeropuertoSolicitud

  if (origin === 'AEROPUERTO TALARA' || origin === 'AEROPUERTO TUMBES') { aeropuertoSolicitud = origin }
  else { aeropuertoSolicitud = destination }
  
  const info={airports:aeropuertoSolicitud,quantityPassengers:quantityPassengers}
  console.log(info)
  console.log(conductores)
  
  useEffect(() => {
    dispatch(filtrarConductores(info))
  }, [/* conductores */])


  const [conductorSeleccionado,setConductorSeleccionado]=useState(false)

  const handleCheckboxChange = (conductorId) => {
    setConductorSeleccionado(!conductorSeleccionado)
    // Agrega la lógica para manejar el cambio de estado del checkbox
    /* dispatch(toggleCheckbox(conductorId)); */
  };
  const handleClick = () => {
    Swal.fire({
      title: "Conductor confirmado para el viaje",
      text: "Simulando que se retorna a pagina de solicitudes luego de aceptar",
      icon: "success"
    });
  };
  

  /* const conductoresFiltrados = conductores.filter((conductor) => conductor.aeropuertoOrigen === aeropuertoSolicitud) */
  return (

    <div >
      <Card
        key={id}
        direction='row'
        /* h='10%'
        w='1%' */
      >
        <CardHeader size="md">ASIGNACION DE CONDUCTOR PARA SOLICITUD DE VIAJE</CardHeader>
        {/* <CardBody  >{id}</CardBody> */}
        <CardBody>Origen: {origin}</CardBody>
        <CardBody>Destino: {destination}</CardBody>
        <CardBody>Fecha: {date}</CardBody>
        <CardBody>Hora: {hour}</CardBody>
        <CardBody>Cantidad de pasajeros: {quantityPassengers}</CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
      {conductores.map((conductor) => (
        <Card
          key={conductor.id}
          direction="column"
          overflow="hidden"
          variant="outline"
          maxW='sm'
        >
          <CardHeader size="md">{conductor.name}</CardHeader>
          <CardBody>{conductor.surname}</CardBody>
          <CardBody>{conductor.phone}</CardBody>
          <CardBody>{conductor.capacityPassengers}</CardBody>
          <CardBody>{conductor.airports}</CardBody>
          {/* <CardBody>{conductor.driverimg}</CardBody> */}
          <CardFooter>
            <Checkbox
              onChange={() => handleCheckboxChange(conductor.id)}
              isChecked={conductor.checked} // esta línea es para controlar el estado del checkbox
            >
              Seleccionar
            </Checkbox>
          </CardFooter>
        </Card>
      ))}
      {conductorSeleccionado?(
          <Box mt={4}>
            <Button colorScheme='teal' variant='outline' w='100%' type='submit'
            onClick={() => handleClick()}>
              Confirmar
            </Button>
          </Box>
      ):(null)
      }
    </div>

  )
}

export default Solicitud