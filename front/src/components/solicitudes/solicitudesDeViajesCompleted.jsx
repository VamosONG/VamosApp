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
import Pagination from "../paginado/paginadoComponent"



const SolicitudesDeViajesCompleted = () => {

    const dispatch = useDispatch()
    const viajesCompletados = useSelector((state) => state.viajesCompletados)

    //***************PAGINADO**********************************/
    
    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);
    const [tripsToShow, setTripsToShow] = useState([]);

    const prevHandler=()=>{
        const prevPage=currentPage-1;
        
        if(prevPage<1) return;
        
        const firstCompleted=(prevPage-1)*6;
        
        setCurrentPage(prevPage);
        setTripsToShow([...viajesPendientes].splice(firstCompleted,6))
      }
      
      const nextHandler=()=>{
        const totalCompleted=viajesPendientes.length;
        
        const nextPage=currentPage+1;
        
        const firstCompleted=currentPage*6;
        
        if (firstCompleted>totalCompleted) return;
        setCurrentPage(nextPage);
        setTripsToShow([...viajesPendientes].splice(firstCompleted,6))
      }


    useEffect(() => {
        dispatch(getCanceledTrips())        
    }, [dispatch])

    useEffect(() => {
        setTripsToShow([...viajesCompletados].splice(0, 6))
    }, [viajesCompletados])


     //***************BUSQUEDA Y ORDENAMIENTO**********************************/
const [input, setInput] = useState({
    searchInput: "",
    order: "",
    
});
const handleChange = async (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value,
        tripState: 'completed'
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
                <TableCaption>Viajes concretados</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Origen</Th>
                        <Th>Destino</Th>
                       
                        <Th>Fecha</Th>
                        <Th>Hora</Th>
                        <Th>Conductor</Th>
                        <Th >Puntación del usuario</Th>
                        
                    </Tr>
                </Thead>
                <Tbody >
                    {tripsToShow.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                            <Td>{index + 1}</Td>
                            <Td>{solicitud.origin}</Td>

                            <Td>{solicitud.destination}</Td>
                            
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

export default SolicitudesDeViajesCompleted;