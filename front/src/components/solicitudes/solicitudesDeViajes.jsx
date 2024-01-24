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


import { getCanceledTrips, getPendingTrips, getReservedTrips, idDeSolicitud, orderSearch } from "../../redux/actions"
import { useEffect, useState } from "react"


import ReactPaginate from "react-paginate";




function SolicitudesDeViajes() {

  const dispatch = useDispatch()

  const viajesReservados = useSelector((state) => state.viajesReservados)
  const viajesPendientes = useSelector((state) => state.viajesPendientes)
  const viajesCompletados = useSelector((state) => state.viajesCompletados)


  const handlerClick=(id)=>{
    dispatch(idDeSolicitud(id))
  }

  useEffect(() => {
    dispatch(getReservedTrips())
    dispatch(getPendingTrips())
    dispatch(getCanceledTrips())
    
  }, [/* dispatch */])
  useEffect(() => {
    setTripsReservedToShow([...viajesReservados].splice(0, 6))
    
  }, [viajesReservados])


  const tabStyles = {
    borderRight: "2px solid #009ED1",
    borderTop: "2px solid #009ED1",
    borderLeft: "2px solid #009ED1",
  };
 
  const itemsPerPage = 6;
//***************PAGINADO VIAJES RESERVED **********************************/
  const [currentPageReserved, setCurrentPageReserved] = useState(0);
  const [tripsReservedToShow, setTripsReservedToShow] = useState([]);
  const totalPagesReserved = Math.ceil(viajesReservados.length / itemsPerPage);
  
  const handlePageChangeReserved = (newPage) => {
    const firstTrip = newPage * itemsPerPage;
    setCurrentPageReserved(newPage);
    setTripsReservedToShow([...viajesReservados].splice(firstTrip, itemsPerPage));
  };
//*************************************************************************/

//***************PAGINADO VIAJES PENDING **********************************/
const [currentPagePending, setCurrentPagePending] = useState(0);
  const totalPagesPending = Math.ceil(viajesPendientes.length / itemsPerPage);
  const handlePageChangePending = (newPage) => {
    setCurrentPagePending(newPage);
  };
//*************************************************************************/

//***************PAGINADO VIAJES COMPLETADOS **********************************/
const [currentPageCompleted, setCurrentPageCompleted] = useState(0);
const totalPagesCompleted = Math.ceil(viajesCompletados.length / itemsPerPage);
const handlePageChangeCompleted = (newPage) => {
  setCurrentPageCompleted(newPage);
};
//*************************************************************************/

//***************BUSQUEDA Y ORDENAMIENTO**********************************/
const [input, setInput] = useState({
    searchInput: "",
    order: "",
    
});
const handleChange = async (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value,
        tripState: 'reserve'
    })
}
const handleSubmitReserved = async (e) => {
    
    console.log(input)
    
    dispatch(orderSearch(input))
}


//*************************************************************************/





  return (
    
      <Tabs isFitted variant="enclosed" marginTop={'7rem'} bg="gray.100">
        
      <TabList mb="1em" /* borderBottom="2px solid #009ED1" */>
        <Tab _focus={tabStyles} >Viajes sin conductor asignado</Tab>
        <Tab _focus={tabStyles}>Viajes con conductor asignado</Tab>
        <Tab _focus={tabStyles}>Viajes concretados</Tab>
      </TabList>
      

      <TabPanels>
        <TabPanel>
<TableContainer >
<TableContainer style={{ backgroundColor:'white' ,size:'xs'}}>
  <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
    <Heading size='xs' textTransform='uppercase' margin={'1rem'}>
      Buscar:
    </Heading>
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <Input 
      htmlSize={50} 
      width='auto' 
      placeholder='Buscar por coincidencia'
      onChange={handleChange}
      name='searchInput'/>
      <FormControl /* isRequired */ style={{ marginLeft: '1rem' }}>
        <Select placeholder='Ordenar' width='xs' name='order' onChange={handleChange}>
          <option>mas reciente</option>
          <option>menos reciente</option>
        </Select>
      </FormControl>
    </Box>
    <Button onClick={handleSubmitReserved}>
      APLICAR
    </Button>
  </Box>
</TableContainer>
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

                {tripsReservedToShow.map((solicitud, index) => (

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
            <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
  <Button
    variant="outline"
    colorScheme="teal"
    disabled={currentPageReserved === 0}
    onClick={() => handlePageChangeReserved(currentPageReserved - 1)}
  >
    Anterior
  </Button>

  <Box as="span" marginLeft="1rem" marginRight="1rem">
    Página {currentPageReserved + 1} de {totalPagesReserved}
  </Box>

  <Button
    variant="outline"
    colorScheme="teal"
    disabled={currentPageReserved === totalPagesReserved - 1}
    onClick={() => handlePageChangeReserved(currentPageReserved + 1)}
  >
    Siguiente
  </Button>
</Box>
        </TableContainer>
        </TabPanel>
        
        <TabPanel>
          
        <TableContainer >
        {viajesPendientes.length > itemsPerPage && (
              <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
                <Button
                  variant="outline"
                  colorScheme="teal"
                  disabled={currentPagePending === 0}
                  onClick={() => handlePageChangePending(currentPagePending - 1)}
                >
                  Anterior
                </Button>

                <Box as="span" marginLeft="1rem" marginRight="1rem">
                  Página {currentPagePending + 1} de {totalPagesPending}
                </Box>

                <Button
                  variant="outline"
                  colorScheme="teal"
                  disabled={currentPagePending === totalPagesPending - 1}
                  onClick={() => handlePageChangePending(currentPagePending + 1)}
                >
                  Siguiente
                </Button>
              </Box>
            )}
            <Table variant='simple' >
                <TableCaption>Viajes con conductor ya asignado</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Origen</Th>
                        <Th>Destino</Th>
                        <Th>Fecha</Th>
                        <Th>Hora</Th>
                        <Th >Conductor</Th>
                        <Th >Cambiar conductor</Th>
                        {/* <Th >Detalles</Th> */}
                    </Tr>
                </Thead>
                <Tbody >
                    {viajesPendientes
                    .slice(currentPagePending * itemsPerPage, (currentPagePending + 1) * itemsPerPage)
                    .map((solicitud, index) => (
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
        {/* {viajesCompletados.length > itemsPerPage && ( */}
          <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
            <Button
              variant="outline"
              colorScheme="teal"
              disabled={currentPageCompleted === 0}
              onClick={() => handlePageChangeCompleted(currentPageCompleted - 1)}
            >
              Anterior
            </Button>

            <Box as="span" marginLeft="1rem" marginRight="1rem">
              Página {currentPageCompleted + 1} de {totalPagesCompleted}
            </Box>

            <Button
              variant="outline"
              colorScheme="teal"
              disabled={currentPageCompleted === totalPagesCompleted - 1}
              onClick={() => handlePageChangeCompleted(currentPageCompleted + 1)}
            >
              Siguiente
            </Button>
          </Box>
        {/* )} */}
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
                    {viajesCompletados
                    .slice(currentPageCompleted * itemsPerPage, (currentPageCompleted + 1) * itemsPerPage)
                    .map((solicitud, index) => (
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
    /* </Flex> */
    

  )
}

export default SolicitudesDeViajes