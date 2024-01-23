import { useDispatch, useSelector } from "react-redux"

import { Box, Card, CardBody, CardHeader, Center, useDisclosure, Grid, GridItem } from '@chakra-ui/react'
import {
  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Avatar, Tooltip,
    TableContainer, Flex,
  FormControl,
  FormLabel,
  Input, Select, Button, Heading, Stack,
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from '@chakra-ui/react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'

import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Solicitud from "./solicitud"

import { getCanceledTrips, getPendingTrips, getReservedTrips, idDeSolicitud } from "../../redux/actions"
import { useEffect } from "react"




function SolicitudesDeViajes() {

  const dispatch = useDispatch()

  const viajesReservados = useSelector((state) => state.viajesReservados)
  const viajesPendientes = useSelector((state) => state.viajesPendientes)
  const viajesCompletados = useSelector((state) => state.viajesCompletados)
  const conductores = useSelector((state) => state.conductores)




  const handlerClick=(id)=>{
    dispatch(idDeSolicitud(id))
  }

  useEffect(() => {
    dispatch(getReservedTrips())
    dispatch(getPendingTrips())
    dispatch(getCanceledTrips())
    
  }, [/* dispatch */])


  const tabStyles = {
    borderRight: "2px solid #009ED1",
    borderTop: "2px solid #009ED1",
    borderLeft: "2px solid #009ED1",
  };

  return (
    
      <Flex bg="blue.200" /* align='center' direction={{base:'column',md:'row'}} */ alignItem='center' justifyContent='center'>
      <Tabs isFitted variant="enclosed" /* marginTop={'1rem'} */ bg="gray.100">
      <TabList mb="1em" /* borderBottom="2px solid #009ED1" */>
        <Tab _focus={tabStyles} >Viajes sin conductor asignado</Tab>
        <Tab _focus={tabStyles}>Viajes con conductor asignado</Tab>
        <Tab _focus={tabStyles}>Viajes concretados</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
<TableContainer >
            <Table variant='simple' >
                <TableCaption>Viajes sin conductor</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Origen</Th>
                        <Th>Destino</Th>
                        {/* <Th>Usuario</Th> */}
                        <Th>Fecha</Th>
                        <Th /* isNumeric */>Hora</Th>
                        <Th >Buscar conductor</Th>
                        {/* <Th >Detalles</Th> */}
                    </Tr>
                </Thead>
                <Tbody >
                    {viajesReservados?.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                            <Td>{index + 1}</Td>
                            <Td>{solicitud.origin}</Td>

                            <Td>{solicitud.destination}</Td>
                            {/* <Td>José Bravo</Td> */}{/* Luego hay que cambiar por nombre de usuario */}
                            <Td>{solicitud.date}</Td>
                            <Td>{solicitud.hour}</Td>

                            <Td justifyContent='center'  >
                                <Flex gap={2} justifyContent={'center'}  >
                                    <Tooltip hasArrow label='Buscar conductor' bg='#009ED1' placement='left-start'>
                                    <Link to='/solicitud' onClick={()=>handlerClick(solicitud.id)}>
                                        <Button  bg='#009ED1'
                                            fontSize='1.2rem' /* id={driver.id} */ >
                                            <AddIcon />
                                        </Button>
                                        </Link>
                                    </Tooltip>
                                    
                                </Flex>
                            </Td>
                           
                        </Tr>
                    ))}

                </Tbody>
            </Table>
        </TableContainer>
        </TabPanel>
        <TabPanel>
          
        <TableContainer >
            <Table variant='simple' >
                <TableCaption>Viajes con conductor ya asignado</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Origen</Th>
                        <Th>Destino</Th>
                        {/* <Th>Usuario</Th> */}
                        <Th>Fecha</Th>
                        <Th /* isNumeric */>Hora</Th>
                        <Th >Conductor</Th>
                        <Th >Cambiar conductor</Th>
                        {/* <Th >Detalles</Th> */}
                    </Tr>
                </Thead>
                <Tbody >
                    {viajesPendientes?.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                            <Td>{index + 1}</Td>
                            <Td>{solicitud.origin}</Td>

                            <Td>{solicitud.destination}</Td>
                            {/* <Td>José Bravo</Td> */}{/* Luego hay que cambiar por nombre de usuario */}
                            <Td>{solicitud.date}</Td>
                            <Td>{solicitud.hour}</Td>
                            <Td>{solicitud.driverFullName}</Td>

                            <Td justifyContent='center'  >
                                <Flex gap={2} justifyContent={'center'}  >
                                    <Tooltip hasArrow label='Buscar conductor' bg='#009ED1' placement='left-start'>
                                    <Link to='/solicitud' onClick={()=>handlerClick(solicitud.id)}>
                                        <Button  bg='#009ED1'
                                            fontSize='1.2rem' /* id={driver.id} */ >
                                            <EditIcon />
                                        </Button>
                                        </Link>
                                    </Tooltip>
                                    
                                </Flex>
                            </Td>
                            
                        </Tr>
                    ))}

                </Tbody>
            </Table>
        </TableContainer>
        </TabPanel>
        <TabPanel>
          
        <TableContainer >
            <Table variant='simple' >
                <TableCaption>Viajes concretados</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Origen</Th>
                        <Th>Destino</Th>
                        {/* <Th>Usuario</Th> */}
                        <Th>Fecha</Th>
                        <Th>Hora</Th>
                        <Th>Conductor</Th>
                        <Th >Puntación del usuario</Th>
                        {/* <Th >Detalles</Th> */}
                    </Tr>
                </Thead>
                <Tbody >
                    {viajesCompletados?.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                            <Td>{index + 1}</Td>
                            <Td>{solicitud.origin}</Td>

                            <Td>{solicitud.destination}</Td>
                            {/* <Td>Panchito</Td> */}{/* Luego hay que cambiar por nombre de usuario */}
                            <Td>{solicitud.date}</Td>
                            <Td>{solicitud.hour}</Td>
                            <Td>{solicitud.driverFullName}</Td>

                            <Td justifyContent='center'  >
                            ★★★✰✰
                            </Td>
                           
                        </Tr>
                    ))}

                </Tbody>
            </Table>
        </TableContainer>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </Flex>
    

  )
}

export default SolicitudesDeViajes