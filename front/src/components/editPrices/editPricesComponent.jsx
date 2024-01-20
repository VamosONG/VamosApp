import { useEffect, useState } from 'react';
import { 
    Button, 
    TableContainer, 
    Table, 
    TableCaption, Thead, Tr, Th, Tbody, Td, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrices, updatePrice } from '../../redux/actions';
import Swal from 'sweetalert2'
import { renderToString } from 'react-dom/server';




const EditPrices = () => {

    const dispatch=useDispatch()

    const allPrices=useSelector((state)=>state.allPrices)

    const [input,setInput]=useState({})
    const [confirmationText,setConfirmationText]=useState("")
    
    console.log(allPrices)

    useEffect(() => {
        dispatch(getAllPrices())
    }, [/* dispatch */]);

    const handleChange=(airport,zone,quantityPassengers,inputValue)=>{
        setInput({
            airport:airport,
            zone:zone,
            quantityPassengers,
            value:Number(inputValue)
        })
    
        setConfirmationText (
            <div>
                <p>Origen: {airport}</p>
                <p>Destino: {zone}</p>
                <p>Cantidad de pasajeros: {quantityPassengers}</p>
                <p>Nuevo precio: {inputValue}</p>
            </div>
        );
    }
    const handleUpdate=()=>{
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
         }).then(async(result) => {
          if (result.isConfirmed) {
              await dispatch(updatePrice(input)) //Para actualizar en BD
            Swal.fire({
              title: "Precio modificado",
              /* text: "Simulando que se abonó..", */
              icon: "success"
            }).then(() => {
                
                window.location.reload();
              });
        }})}
    
    
      return (
        <TableContainer>
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
            <Tr>
            <Td>{combo.airport} - {combo.zone}</Td>
            {combo.quantityPassengers===4?(
                <Td>AUTO</Td>
            ):(combo.quantityPassengers===6?(
                <Td>CAMIONETA</Td>
            ):(combo.quantityPassengers===10?(
                <Td>VAN</Td>
            ):(<Td>VAN PLUS</Td>)))}

            <Td><Input 
            htmlSize={4} 
            width='auto' 
            border= '2px solid black' 
            placeholder={combo.value}
            name='date'
            /* value={input.value} */
            onChange={(e)=>handleChange(combo.airport,combo.zone,combo.quantityPassengers,e.target.value)}/></Td>
            <Td><Button 
            backgroundColor="black" 
            variant="solid" 
            color="white"
            onClick={()=>handleUpdate()}>Actualizar</Button></Td>
          </Tr>
        ))}
    </Tbody>
  </Table>
</TableContainer>
      );
    };
export default EditPrices