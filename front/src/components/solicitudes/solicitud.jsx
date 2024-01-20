
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
  Button,
  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Avatar, Tooltip,
    TableContainer, Flex,
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { conductorAsignado, filtrarConductores, getAllConductores, postNewViaje } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import ViewBtnDetailDriver from '../../views/driversViewAdmin/DetailDriver/ViewBtnDetailDriver';




const Solicitud =()=> {

  const dispatch=useDispatch() 

  const id = useSelector((state) => state.idSolicitud)
  console.log(id)
  const viajesReservados = useSelector((state) => state.viajesReservados)
  const viajesPendientes = useSelector((state) => state.viajesPendientes)
  const conductores = useSelector((state) => state.conductoresFiltrados)


  let solicitudFound = viajesReservados.find((solicitud) => solicitud.id === id)
  if (!solicitudFound){solicitudFound = viajesPendientes.find((solicitud) => solicitud.id === id)}
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


  /* const [conductorSeleccionado,setConductorSeleccionado]=useState(false)
  const [idConductorSeleccionado,setIdConductorSeleccionado]=useState('')

  const handleCheckboxChange = (conductorId) => {
    setConductorSeleccionado(!conductorSeleccionado)
    setIdConductorSeleccionado(conductorId)
  }; */
  const handleClick = (conductorId) => {
    dispatch(conductorAsignado({tripId:id,driverId:conductorId}))
    Swal.fire({
      title: "Conductor confirmado para el viaje",
      text: "Para cambiar de conductor ir a Solicitudes de viaje --> Viajes con conductor asignado",
      icon: "success"
    }).then(() => {
      // Redirigir a la página anterior
      window.history.back();
    });
  };
  

 
  return (

    <div >
      <Card
        key={id}
        direction='row'
        
      >
        <CardHeader size="md">ASIGNACION DE CONDUCTOR PARA SOLICITUD DE VIAJE</CardHeader>
        
        <CardBody>Origen: {origin}</CardBody>
        <CardBody>Destino: {destination}</CardBody>
        <CardBody>Fecha: {date}</CardBody>
        <CardBody>Hora: {hour}</CardBody>
        <CardBody>Cantidad de pasajeros: {quantityPassengers}</CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
      <TableContainer >
            <Table variant='simple' >
                <TableCaption>Conductores filtrados para esta solicitud según aeropuerto y cantidad de pasajeros</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Aeropuerto</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th /* isNumeric */>Max. Pasajeros</Th>
                        <Th>Asignar</Th>
                        <Th>Detalles</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    {conductores?.map((driver, index) => (
                        <Tr key={driver.id} bg={driver.driverState ? '#EEFFF5' : '#FFEEEE'}  >
                            <Td>{index + 1}</Td>
                            <Td>{driver.airports}</Td>

                            <Td>{driver.name}</Td>
                            <Td>{driver.carType}</Td>
                            <Td>{driver.phone}</Td>
                            <Td>{driver.capacityPassengers}</Td>

                            <Td justifyContent='center'  >
                                <Flex gap={2} justifyContent={'center'}  >
                                    <Tooltip hasArrow label='Seleccionar' 
                                      bg='#009ED1' placement='left-start'>
                                        <Button onClick={() => handleClick(driver.id)} 
                                          bg='#009ED1'
                                          fontSize='1.2rem' 
                                          id={driver.id} 
                                          isDisabled={!driver.driverState ? 'disabled' : null} >
                                            <AddIcon />
                                        </Button>
                                    </Tooltip>
                                    
                                </Flex>
                            </Td>
                            <Td>
                            <ViewBtnDetailDriver id={driver.id}
                                        name={driver.name}
                                        surname={driver.surname}
                                        email={driver.email}
                                        birthday={driver.birthday}
                                        dni={driver.dni}
                                        phone={driver.phone}
                                        driverImg={driver.driverImg}
                                        airports={driver.airports}
                                        carType={driver.carType}
                                        carModel={driver.carModel}
                                        driverLicense={driver.driverLicense}
                                        carImg={driver.carImg}
                                        carPatent={driver.carPatent}
                                        carSoat={driver.carSoat}
                                        circulationPermit={driver.circulationPermit}
                                        capacityPassengers={driver.capacityPassengers}
                                        driverState={driver.driverState} />
                            </Td>
                        </Tr>
                    ))}

                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Aeropuerto</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th>Max. Pasajeros</Th>
                        <Th>Asignar</Th>
                        <Th>Detalles</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
      {/* {conductorSeleccionado?(
          <Box mt={4}>
            <Button colorScheme='teal' variant='outline' w='100%' type='submit'
            onClick={() => handleClick()}>
              Confirmar
            </Button>
          </Box>
      ):(null)
      } */}
    </div>

  )
}

export default Solicitud




//isChecked={conductor.checked} esta línea es para controlar el estado del checkbox