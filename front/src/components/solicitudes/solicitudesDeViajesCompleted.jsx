import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Input,
  Select,
  Button,
  Heading,
  Tooltip,
} from '@chakra-ui/react';
import { AddIcon, EditIcon, RepeatClockIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import Pagination from "../paginado/paginadoComponent";
import {
  getCanceledTrips,
  getPendingTrips,
  getReservedTrips,
  idDeSolicitud,
  orderSearch
} from "../../redux/actions";
import Solicitud from "./solicitud";

const SolicitudesDeViajesCompleted = () => {
  const dispatch = useDispatch();
  const viajesCompletados = useSelector((state) => state.viajesCompletados);

  //***************PAGINADO**********************************/
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [tripsToShow, setTripsToShow] = useState([]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 1) return;

    const firstCompleted = (prevPage - 1) * 6;

    setCurrentPage(prevPage);
    setTripsToShow([...viajesPendientes].splice(firstCompleted, 6));
  };

  const nextHandler = () => {
    const totalCompleted = viajesPendientes.length;

    const nextPage = currentPage + 1;

    const firstCompleted = currentPage * 6;

    if (firstCompleted > totalCompleted) return;
    setCurrentPage(nextPage);
    setTripsToShow([...viajesPendientes].splice(firstCompleted, 6));
  };

  useEffect(() => {
    dispatch(getCanceledTrips());
  }, [dispatch]);

  useEffect(() => {
    setTripsToShow([...viajesCompletados].splice(0, 6));
  }, [viajesCompletados]);

  //***************BUSQUEDA Y ORDENAMIENTO**********************************/
  const [input, setInput] = useState({
    searchInput: "",
    order: "",
    tripState: "completed",
  });

  const handleChange = async (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClean = async (e) => {
    setInput({
        ...input,
        searchInput: "",
        order: "",
        tripState: 'completed'
    })
    dispatch(orderSearch({
      ...input,
      searchInput: "",
      order: "",
      tripState: 'completed'
  }));
  }

  const handleSubmit = async (e) => {
    dispatch(orderSearch(input));
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        bgColor='#009ED1'
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
          />
          <Select
            marginRight='2rem'
            color="black"
            bgColor="white"
            placeholder="Ordenar"
            width="xs"
            name="order"
            onChange={handleChange}
          >
            <option>mas reciente</option>
            <option>menos reciente</option>
          </Select>
        </Box>
        <Button onClick={handleSubmit} style={{marginRight:'1rem'}}>APLICAR</Button>
        <Tooltip hasArrow label='Reiniciar filtro y búsqueda' bg='#009ED1' placement='left-start'>
                <Button onClick={handleClean} >
                <RepeatClockIcon/>
                </Button>
                </Tooltip>
      </Box>
      <Table variant="simple">
        <TableCaption>Viajes concretados</TableCaption>
        <Thead>
          <Tr>
          {/* <Th border="2px solid black">Nro</Th> */}
          <Th border="2px solid black">Origen</Th>
          <Th border="2px solid black">Destino</Th>
          <Th border="2px solid black">Fecha</Th>
          <Th border="2px solid black">Hora</Th>
          <Th border="2px solid black">Usuario</Th>
          <Th border="2px solid black">Conductor</Th>
          <Th border="2px solid black">Puntuación del usuario</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tripsToShow.map((solicitud, index) => (
            <Tr key={solicitud.id}>
              {/* <Td border="2px solid black">{index + 1}</Td> */}
              <Td border="2px solid black">{solicitud.origin}</Td>
              <Td border="2px solid black">{solicitud.destination}</Td>
              <Td border="2px solid black">{solicitud.date}</Td>
              <Td border="2px solid black">{solicitud.hour}</Td>
              <Td border="2px solid black">{solicitud.userEmail}</Td>
              <Td border="2px solid black">{solicitud.driverFullName}</Td>
              <Td border="2px solid black" justifyContent="center">
              ★★★✰✰
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

        <Box as="span" marginLeft="1rem" marginRight="1rem">
          Página {currentPage}
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
    </Box>
  );
};

export default SolicitudesDeViajesCompleted;
