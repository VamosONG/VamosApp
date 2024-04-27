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

  console.log(combo)
  const [input, setInput] = useState({})
  const [confirmationText, setConfirmationText] = useState("")

  const [editar,setEditar] = useState(false)


  const handleChange = (airport, zone, quantityPassengers, inputValue) => {
    setInput({
      airport: airport,
      zone: zone,
      quantityPassengers,
      value: inputValue !== '' ? Number(inputValue) : undefined,
    })
   
    setConfirmationText(
      <div>
        <p>Origen: {airport}</p>
        <p>Destino: {zone}</p>
        <p>Cantidad de pasajeros: {quantityPassengers}</p>
        <p>Nuevo precio: {inputValue}</p>
      </div>
    );
  }
  const handleClick = () => {
    setEditar(!editar)
  }


  return (
    
            <Tr style={{ backgroundColor: !isEvenRow ? 'white' : /* '#009ED1' */'blue.100' }}> 
              <Td style={{ fontWeight: 'bold' }}>{combo.airport} - {combo.zone}</Td>
              {combo.quantityPassengers === 4 ? (
                <Td border="1px solid black" style={{ fontWeight: 'bold' }}>AUTO</Td>
              ) : (combo.quantityPassengers === 6 ? (
                <Td border="1px solid black" style={{ fontWeight: 'bold' }}>CAMIONETA</Td>
              ) : (combo.quantityPassengers === 10 ? (
                <Td border="1px solid black" style={{ fontWeight: 'bold' }}>VAN</Td>
              ) : (<Td border="1px solid black" style={{ fontWeight: 'bold' }}>VAN PLUS</Td>)))}

            {!editar?(
              <Tr>
              <Td><Input
                htmlSize={4}
                width='auto'
                border='2px solid black'
                placeholder={combo.value}
                name='date'
                value={combo.value}
                /> </Td>
              <Td><Button
                backgroundColor="black"
                variant="solid"
                color="white"
                onClick={() => handleClick(input,confirmationText)}
                /* isDisabled={(input.value === Number(combo.value))||(input.value === undefined || input.value === ''|| input.value === null)} */
                >Editar</Button></Td>
                </Tr>
            ):(
                <Tr>
              <Td><Input
                htmlSize={4}
                width='auto'
                border='2px solid black'
                /* placeholder={combo.value} */
                name='date'
                /* value={input.value} */
                onChange={(e) => handleChange(combo.airport, combo.zone, combo.quantityPassengers, e.target.value)} /></Td>
                <Td><Button
                backgroundColor="black"
                variant="solid"
                color="white"
                onClick={() => {
                  handleUpdate(input,confirmationText,editar)
                  setEditar(!editar)
                }}
                isDisabled={(input.value === Number(combo.value))||(input.value === undefined || input.value === ''|| input.value === null)}
                >Actualizar</Button></Td>
                </Tr>
                
                )}
                </Tr>
  );
};
export default EditPrice