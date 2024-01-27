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
import EditPrice from './editPrice';
import {  useNavigate } from 'react-router-dom';




const EditPrices = () => {

  const dispatch = useDispatch()
  

  const allPrices = useSelector((state) => state.allPrices)

  console.log(allPrices)

  useEffect(() => {
    dispatch(getAllPrices())
  }, []);

  
  const handleUpdate = (input,confirmationText) => {
    
    
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
          icon: "success"
        }).then(() => {
          window.location.reload();
          /* history.push('/editPrices'); */
          /* navigate('/editPrices'); */
        });
      }
    })
  }


  return (
    <Flex>
    <TableContainer marginTop={'7rem'}>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Precios según ruta y vehículo</TableCaption>
        <Thead>
          <Tr>
            <Th>RUTA</Th>
            <Th>TIPO DE CARRO</Th>
            <Th>PRECIO EN SOLES</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allPrices?.map((combo, index) => (
            <EditPrice
            key={index}
            combo={combo}
            index={index}
            handleUpdate={handleUpdate}
            isEvenRow={index % 2 === 0}
          />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    </Flex>
  );
};
export default EditPrices