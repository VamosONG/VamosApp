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



const SolicitudesDeViajesPending = () => {

    const dispatch = useDispatch()
    
    const viajesPendientes = useSelector((state) => state.viajesPendientes)
    console.log(viajesPendientes)

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
    
    if (firstPending>totalPending) return;
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
const handleSubmit = async (e) => {
    
    console.log(input)
    
    dispatch(orderSearch(input))
}


//*************************************************************************/
    


    
    return (
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
    <Button onClick={handleSubmit}>
      APLICAR
    </Button>
    </Box>
    </TableContainer>
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
                    {tripsToShow.map((solicitud, index) => (
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
            <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
  <Button
    variant="outline"
    colorScheme="teal"
    /* disabled={currentPageReserved === 0} */
    onClick={prevHandler}
  >
    Anterior
  </Button>

  <Box as="span" marginLeft="1rem" marginRight="1rem">
    Página {currentPage } 
  </Box>

  <Button
    variant="outline"
    colorScheme="teal"
    /* disabled={currentPageReserved === totalPagesReserved - 1} */
    onClick={nextHandler}
  >
    Siguiente
        </Button>
        </Box>
        </TableContainer>
    )
}

export default SolicitudesDeViajesPending;