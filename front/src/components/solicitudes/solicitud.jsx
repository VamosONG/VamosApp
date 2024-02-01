
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
  
  const viajesReservados = useSelector((state) => state.viajesReservados)
  const viajesPendientes = useSelector((state) => state.viajesPendientes)
  const conductores = useSelector((state) => state.conductoresFiltrados)


  let solicitudFound = viajesReservados.find((solicitud) => solicitud.id === id)
  if (!solicitudFound){solicitudFound = viajesPendientes.find((solicitud) => solicitud.id === id)}
  

  const { origin, destination, date, hour, quantityPassengers } = solicitudFound

  let aeropuertoSolicitud

  if (origin === 'AEROPUERTO TALARA' || origin === 'AEROPUERTO TUMBES') { aeropuertoSolicitud = origin }
  else { aeropuertoSolicitud = destination }
  
  const info={airports:aeropuertoSolicitud,quantityPassengers:quantityPassengers}
 
  
  
  useEffect(() => {
    dispatch(filtrarConductores(info))
  }, [/* conductores */])


  const handleClick = (conductorId) => {
    dispatch(conductorAsignado({tripId:id,driverId:conductorId}))
    Swal.fire({
      title: "¡Conductor asignado con éxito!",
      text: "Para cambiar de conductor ir a Solicitudes de viaje --> Viajes con conductor asignado",
      icon: "success"
    }).then(() => {
      // Redirigir a la página anterior
      window.history.back();
    });
  };
  

 
  return (
    
    <Box bgColor="gray.300">
      <Card
        key={id}
        direction='row'
        marginTop={'10rem'}
        bgColor='#009ED1'
      >
        <CardHeader color="white" fontFamily='DIN Medium, sans-serif' fontSize="lg">ASIGNACION DE CONDUCTOR PARA SOLICITUD DE VIAJE</CardHeader>
        
        <CardBody color="white" fontFamily='DIN Medium, sans-serif' fontSize="lg">Origen: {origin}</CardBody>
        <CardBody color="white" fontFamily='DIN Medium, sans-serif' fontSize="lg">Destino: {destination}</CardBody>
        <CardBody color="white" fontFamily='DIN Medium, sans-serif' fontSize="lg">Fecha: {date}</CardBody>
        <CardBody color="white" fontFamily='DIN Medium, sans-serif' fontSize="lg">Hora: {hour}</CardBody>
        <CardBody color="white" fontFamily='DIN Medium, sans-serif' fontSize="lg">Cantidad de pasajeros: {quantityPassengers}</CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
      <TableContainer marginBottom={'10rem'}>
            <Table variant='simple' >
                <TableCaption bgColor='#009ED1' >Conductores filtrados para esta solicitud según aeropuerto y cantidad de pasajeros</TableCaption>
                <Thead>
                    <Tr>
                        <Th border="1px solid black">Nro</Th>
                        <Th border="1px solid black">Aeropuerto</Th>
                        <Th border="1px solid black">Nombre</Th>
                        <Th border="1px solid black">Vehiculo</Th>
                        <Th border="1px solid black">telefono</Th>
                        <Th border="1px solid black">Max. Pasajeros</Th>
                        <Th border="1px solid black">Asignar</Th>
                        <Th border="1px solid black">Detalles</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    {conductores?.map((driver, index) => (
                        <Tr key={driver.id} bg={driver.driverState ? '#EEFFF5' : '#FFEEEE'}  >
                            <Td border="1px solid black">{index + 1}</Td>
                            <Td border="1px solid black">{driver.airports}</Td>

                            <Td border="1px solid black">{driver.name}</Td>
                            <Td border="1px solid black">{driver.carType}</Td>
                            <Td border="1px solid black">{driver.phone}</Td>
                            <Td border="1px solid black">{driver.capacityPassengers}</Td>

                            <Td justifyContent='center' border="1px solid black" >
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
                            <Td border="1px solid black" justifyContent='center'>
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
                        <Th border="1px solid black">Nro</Th>
                        <Th border="1px solid black">Aeropuerto</Th>
                        <Th border="1px solid black">Nombre</Th>
                        <Th border="1px solid black">Vehiculo</Th>
                        <Th border="1px solid black">telefono</Th>
                        <Th border="1px solid black">Max. Pasajeros</Th>
                        <Th border="1px solid black">Asignar</Th>
                        <Th border="1px solid black">Detalles</Th>
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
    </Box>

  )
}

export default Solicitud




//isChecked={conductor.checked} esta línea es para controlar el estado del checkbox
