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
} from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
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
import * as XLSX from 'xlsx';

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
    setTripsToShow([...viajesCompletados].splice(firstCompleted, 6));
  };

  const nextHandler = () => {
    const totalCompleted = viajesPendientes.length;

    const nextPage = currentPage + 1;

    const firstCompleted = currentPage * 6;

    if (firstCompleted > totalCompleted) return;
    setCurrentPage(nextPage);
    setTripsToShow([...viajesCompletados].splice(firstCompleted, 6));
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

  const handleSubmit = async (e) => {
    dispatch(orderSearch(input));
  };


  const handleOnExport = ()=>{

    const parametros = viajesCompletados.map(({ date, hour, origin, destination, driverFullName, userEmail, price, quantityPassengers
    }) => ({
      date,
      hour,
      origin,
      destination,
      driverFullName,
      userEmail,
      quantityPassengers,
      price
    }));

    // const cellStyles = {
    //   header: { fill: { fgColor: { rgb: 'FF000000' } }, font: { color: { rgb: 'FFFFFFFF' }, bold: true } },
    //   cell: { fill: { fgColor: { rgb: 'FFFFFFFF' } } },
    // };
   
    var wb = XLSX.utils.book_new()
    var ws = XLSX.utils.json_to_sheet(parametros);

    // ws['!cols'] = [{ wch: 12 }, { wch: 10 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 30 }];
    // ws['!merges'] = [{ s: { c: 0, r: 0 }, e: { c: 5, r: 0 } }]; // Fusiona la fila de encabezado
  
    // // Aplica estilos a las celdas
    // Object.keys(ws).forEach((key) => {
    //   if (key.includes('!')) return;
    //   ws[key].s = cellStyles.cell;
    // });
  
    // // Agrega el encabezado
    // ws['A1'].s = cellStyles.header;
    // ws['B1'].s = cellStyles.header;
    // ws['C1'].s = cellStyles.header;
    // ws['D1'].s = cellStyles.header;
    // ws['E1'].s = cellStyles.header;
    // ws['F1'].s = cellStyles.header;
    // ws['G1'].s = cellStyles.header;
    // ws['H1'].s = cellStyles.header;

    XLSX.utils.book_append_sheet(wb, ws, "Viajes Completados");

    XLSX.writeFile(wb, "viajesCompletados.xlsx");
  }

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
        <Button onClick={handleSubmit}>APLICAR</Button>
        
        <Button onClick={handleOnExport}>DESCARGAR</Button>
      </Box>
      <Table variant="simple">
        <TableCaption>Viajes concretados</TableCaption>
        <Thead>
          <Tr>
          <Th border="2px solid black">Nro</Th>
          <Th border="2px solid black">Origen</Th>
          <Th border="2px solid black">Destino</Th>
          <Th border="2px solid black">Fecha</Th>
          <Th border="2px solid black">Hora</Th>
          <Th border="2px solid black">Conductor</Th>
          <Th border="2px solid black">Puntuación del usuario</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tripsToShow.map((solicitud, index) => (
            <Tr key={solicitud.id}>
              <Td border="2px solid black">{index + 1}</Td>
              <Td border="2px solid black">{solicitud.origin}</Td>
              <Td border="2px solid black">{solicitud.destination}</Td>
              <Td border="2px solid black">{solicitud.date}</Td>
              <Td border="2px solid black">{solicitud.hour}</Td>
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
