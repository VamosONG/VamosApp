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
import { AddIcon, EditIcon, RepeatClockIcon } from '@chakra-ui/icons'

import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Solicitud from "./solicitud"


import { getCanceledTrips, getPendingTrips, getReservedTrips, idDeSolicitud, orderSearch } from "../../redux/actions"
import { useEffect, useState } from "react"



const SolicitudesDeViajesPending = () => {

    const dispatch = useDispatch();
    
    const viajesPendientes = useSelector((state) => state.viajesPendientes)
    

    //***************PAGINADO**********************************/
    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);
  const [tripsToShow, setTripsToShow] = useState([]);
  
  const prevHandler=()=>{
    const prevPage=currentPage-1;
    
    if(prevPage<1) return;
    
    const firstPending=(prevPage-1)*6;
    
    setCurrentPage(prevPage);
    setTripsToShow([...viajesPendientes].splice(firstPending,6))
  }
  
  const nextHandler=()=>{
    const totalPending=viajesPendientes.length;
    
    const nextPage=currentPage+1;
    
    const firstPending=currentPage*6;
    
    if (firstPending>=totalPending) return;
    setCurrentPage(nextPage);
    setTripsToShow([...viajesPendientes].splice(firstPending,6))
  }


    const handlerClick=(id)=>{
        dispatch(idDeSolicitud(id))
    }

    useEffect(() => {
        dispatch(getPendingTrips())
    }, [dispatch])

    useEffect(() => {
        setTripsToShow([...viajesPendientes].splice(0, 6))
        
    }, [viajesPendientes])

     //***************BUSQUEDA Y ORDENAMIENTO**********************************/
const [input, setInput] = useState({
    searchInput: "",
    order: "",
    
});
const handleChange = async (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value,
        tripState: 'pending'
    })
}

const handleClean = async (e) => {
  setInput({
      ...input,
      searchInput: "",
      order: "",
      tripState: 'pending'
  })
  dispatch(orderSearch({
    ...input,
    searchInput: "",
    order: "",
    tripState: 'pending'
}));
setCurrentPage(1);
}

const handleSubmit = async (e) => {
    dispatch(orderSearch(input))
    setCurrentPage(1);
}


//*************************************************************************/
    


    
    return (
        <TableContainer >
          <TableContainer style={{ backgroundColor:'white' ,size:'xs'}}>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            bgColor='#009ED1'
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            border="1px solid black"
            >
            <Heading size="xs" textTransform="uppercase" margin="1rem">
              Buscar:
            </Heading>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Input 
              marginRight='2rem'
              color="black"
              bgColor="white"
              htmlSize={50}
              width="auto"
              placeholder="Buscar por coincidencia"
              onChange={handleChange}
              name="searchInput"
              value={input.searchInput}
              />
              <FormControl>
              <Select 
              marginRight='2rem'
              color="black"
              bgColor="white"
              placeholder="Ordenar"
              width="xs"
              name="order"
              onChange={handleChange}
              value={input.order}
              >
              <option>mas reciente</option>
              <option>menos reciente</option>
              </Select>
              </FormControl>
              </Box>
                <Button onClick={handleSubmit} style={{marginRight:'1rem'}}>
                APLICAR
                </Button>
                <Tooltip hasArrow label='Reiniciar filtro y búsqueda' bg='#009ED1' placement='left-start'>
                <Button onClick={handleClean} >
                <RepeatClockIcon/>
                </Button>
                </Tooltip>
              </Box>
              </TableContainer>
                <Table variant='simple' >
                  <TableCaption>Viajes con conductor ya asignado</TableCaption>
                    <Thead>
                      <Tr>
                        {/* <Th border="2px solid black">Nro</Th> */}
                        <Th border="2px solid black">Origen</Th>
                        <Th border="2px solid black">Destino</Th>
                        <Th border="2px solid black">Fecha</Th>
                        <Th border="2px solid black">Hora</Th>
                        <Th border="2px solid black">Usuario</Th>
                        <Th border="2px solid black">Conductor</Th>
                        <Th border="2px solid black">Cambiar conductor</Th>
                      </Tr>
                    </Thead>
                    <Tbody >
                    {tripsToShow.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                          {/* <Td border="2px solid black">{index + 1}</Td> */}
                          <Td border="2px solid black">{solicitud.origin}</Td>
                          <Td border="2px solid black">{solicitud.destination}</Td>
                          <Td border="2px solid black">{solicitud.date}</Td>
                          <Td border="2px solid black">{solicitud.hour}</Td>
                          <Td border="2px solid black">{solicitud.userEmail}</Td>
                          <Td border="2px solid black">{solicitud.driverFullName}</Td>
                          <Td border="2px solid black" justifyContent='center'>
                          <Flex gap={2} justifyContent={'center'}  >
                          <Tooltip hasArrow label='Buscar conductor' bg='#009ED1' placement='left-start'>
                            <Link to='/solicitud' onClick={()=>handlerClick(solicitud.id)}>
                              <Button  
                              bg='#009ED1'
                              fontSize='1.2rem'>
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
                <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
                <Button
                color='black'
                bgColor='#009ED1'
                variant="outline"
                colorScheme="teal"
                onClick={prevHandler}
                >
                Anterior
                </Button>

                <Box 
                as="span" marginLeft="1rem" marginRight="1rem">
                Página {currentPage } 
                </Box>

                <Button
                color='black'
                bgColor='#009ED1'
                variant="outline"
                colorScheme="teal"
                onClick={nextHandler}
                >
                Siguiente
                </Button>
                </Box>
        </TableContainer>
    )
}

export default SolicitudesDeViajesPending;
