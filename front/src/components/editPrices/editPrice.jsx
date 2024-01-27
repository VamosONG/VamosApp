import { useEffect, useState } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableCaption, Thead, Tr, Th, Tbody, Td, Input, Flex
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrices, updatePrice } from '../../redux/actions';
import Swal from 'sweetalert2'
import { renderToString } from 'react-dom/server';




const EditPrice = ({combo,handleUpdate,isEvenRow}) => {


  const [input, setInput] = useState({})
  const [confirmationText, setConfirmationText] = useState("")


  const handleChange = (airport, zone, quantityPassengers, inputValue) => {
    setInput({
      airport: airport,
      zone: zone,
      quantityPassengers,
      value: inputValue !== '' ? Number(inputValue) : undefined,
    })
    console.log(inputValue)
    setConfirmationText(
      <div>
        <p>Origen: {airport}</p>
        <p>Destino: {zone}</p>
        <p>Cantidad de pasajeros: {quantityPassengers}</p>
        <p>Nuevo precio: {inputValue}</p>
      </div>
    );
  }


  return (
    
            <Tr style={{ backgroundColor: isEvenRow ? 'white' : '#009ED1' }}> {/* Modificar las etiquetas para que esto funcione */}
              <Td>{combo.airport} - {combo.zone}</Td>
              {combo.quantityPassengers === 4 ? (
                <Td>AUTO</Td>
              ) : (combo.quantityPassengers === 6 ? (
                <Td>CAMIONETA</Td>
              ) : (combo.quantityPassengers === 10 ? (
                <Td>VAN</Td>
              ) : (<Td>VAN PLUS</Td>)))}

              <Td><Input
                htmlSize={4}
                width='auto'
                border='2px solid black'
                placeholder={combo.value}
                name='date'
                /* value={input.value} */
                onChange={(e) => handleChange(combo.airport, combo.zone, combo.quantityPassengers, e.target.value)} /></Td>
              <Td><Button
                backgroundColor="black"
                variant="solid"
                color="white"
                onClick={() => handleUpdate(input,confirmationText)}
                isDisabled={(input.value === Number(combo.value))||(input.value === undefined || input.value === ''|| input.value === null)}
                >Actualizar</Button></Td>
            </Tr>
         
  );
};
export default EditPrice