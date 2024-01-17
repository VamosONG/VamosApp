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
import { AddIcon } from '@chakra-ui/icons'

import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Solicitud from "./solicitud"
import DetailChofer from "../../views/detailChofer/DetailChofer"
import { getPendingTrips, getReservedTrips, idDeSolicitud } from "../../redux/actions"
import { useEffect } from "react"




function SolicitudesDeViajes() {

  const dispatch = useDispatch()

  const viajesReservados = useSelector((state) => state.viajesReservados)
  const viajesPendientes = useSelector((state) => state.viajesPendientes)
  console.log(viajesReservados)


  const handlerClick=(id)=>{
    dispatch(idDeSolicitud(id))
  }

  useEffect(() => {
    dispatch(getReservedTrips())
    dispatch(getPendingTrips())
  }, [/* dispatch */])

  /* const estiloParrafo = {
    backgroundColor: '#009ED1',
    padding: '10px',
    color: 'white',
  };

  const estiloTarjeta = {
    marginBottom: "30px", 
  };
 */

  return (
    <div >
      
      <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Viajes sin conductor asignado</Tab>
        <Tab>Viajes con conductor asignado</Tab>
        <Tab>Viajes concretados</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
        {/* <ul>

{solicitudesDeViajes.map((solicitud) => (

  <Box mt={4} key={solicitud.id} style={estiloTarjeta}>
      <Link to='/solicitud' onClick={()=>handlerClick(solicitud.id)}>
    <Button colorScheme='teal' variant='outline' w='100%' type='submit'>
    | ASIGNAR CONDUCTOR | 
    <p style={estiloParrafo}>
    Solicitud de viaje desde {solicitud.origin} hacia {solicitud.destination} ||
    Usuario: Carlitos || Fecha : {solicitud.date} || Hora: {solicitud.hour} || 
    </p>
    </Button>
    
      </Link>
  </Box>
))}
</ul> */}
<TableContainer >
            <Table variant='simple' >
                <TableCaption>Viajes sin conductor</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Origen</Th>
                        <Th>Destino</Th>
                        <Th>Usuario</Th>
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
                            <Td>Panchito</Td>{/* Luego hay que cambiar por nombre de usuario */}
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
                        <Th>Usuario</Th>
                        <Th>Fecha</Th>
                        <Th /* isNumeric */>Hora</Th>
                        <Th >Buscar conductor</Th>
                        {/* <Th >Detalles</Th> */}
                    </Tr>
                </Thead>
                <Tbody >
                    {viajesPendientes?.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                            <Td>{index + 1}</Td>
                            <Td>{solicitud.origin}</Td>

                            <Td>{solicitud.destination}</Td>
                            <Td>Panchito</Td>{/* Luego hay que cambiar por nombre de usuario */}
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
          
          <p>Aquí estarán los viajes concretados</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  
    </div>

  )
}

export default SolicitudesDeViajes