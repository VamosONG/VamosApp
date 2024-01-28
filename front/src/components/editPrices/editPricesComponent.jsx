import { useEffect, useState } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableCaption, 
  Thead, 
  Tr, 
  Th, 
  Tbody, 
  Td, 
  Input,
  Flex,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrices, updatePrice } from '../../redux/actions';
import Swal from 'sweetalert2'
import { renderToString } from 'react-dom/server';




const EditPrices = () => {

  const dispatch = useDispatch()

  const allPrices = useSelector((state) => state.allPrices)

  const [input, setInput] = useState({})
  const [confirmationText, setConfirmationText] = useState("")

  console.log(allPrices)

  useEffect(() => {
    dispatch(getAllPrices())
  }, [/* dispatch */]);

  const handleChange = (airport, zone, quantityPassengers) => (e) => {
    setInput(prevInput => ({
      ...prevInput,
      airport: airport,
      zone: zone,
      quantityPassengers,
      value: Number(e.target.value)
    }));

    setConfirmationText(
      <div>
        <p>Origen: {airport}</p>
        <p>Destino: {zone}</p>
        <p>Cantidad de pasajeros: {quantityPassengers}</p>
        <p>Nuevo precio: {inputValue}</p>
      </div>
    );
  }
  const handleUpdate = () => {
    console.log(confirmationText)
    Swal.fire({
      title: "Está por el cambiar el precio",
      html: renderToString(confirmationText),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      htmlMode: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(updatePrice(input)) //Para actualizar en BD
        Swal.fire({
          title: "Precio modificado",
          /* text: "Simulando que se abonó..", */
          icon: "success"
        }).then(() => {

          window.location.reload();
        });
      }
    })
  }


  return (
    <Flex
    aalignItems='center'
    justifyContent='center'
    direction="column"
    width="100%"
    overflowX="auto"
    borderRadius="md"
    >
    <TableContainer>
    <Flex px={0} bg='gray.300' overflowX="auto" borderBottomLeftRadius="md" borderBottomRightRadius="md" border="1px solid black">
      <Table colorScheme='#009ED1'>
        <TableCaption border="1px solid black" bg='#009ED1'>Precios según ruta y vehículo</TableCaption>
        <Thead bg='#009ED1'>
          <Tr>
            <Th border="2px solid black" color='white'>RUTA</Th>
            <Th border="2px solid black" color='white'>TIPO DE CARRO</Th>
            <Th border="2px solid black" color='white'>PRECIO EN SOLES</Th>
            <Th border="2px solid black" color='white'>ACTUALIZAR</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allPrices?.map((combo, index) => (
            <Tr key={index}> 
              <Td border="2px solid black">{combo.airport} - {combo.zone}</Td>
              {combo.quantityPassengers === 4 ? (
                <Td border="2px solid black">AUTO</Td>
              ) : (combo.quantityPassengers === 6 ? (
                <Td border="2px solid black">CAMIONETA</Td>
              ) : (combo.quantityPassengers === 10 ? (
                <Td border="2px solid black">VAN</Td>
              ) : (<Td border="2px solid black">VAN PLUS</Td>)))}

              <Td border="2px solid black" textAlign="center">
                <Input
                color='black'
                bg='white'
                htmlSize={4}
                width='auto'
                border='2px solid black'
                placeholder={combo.value}
                name='date'
                /* value={input.value} */
                onChange={handleChange(combo.airport, combo.zone, combo.quantityPassengers)} /></Td>
              <Td border="2px solid black" textAlign="center"><Button
                backgroundColor='#E83D6F'
                variant="solid"
                color="white"
                onClick={() => handleUpdate()}>Actualizar</Button></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      </Flex>
    </TableContainer>
    </Flex>
  );
};
export default EditPrices