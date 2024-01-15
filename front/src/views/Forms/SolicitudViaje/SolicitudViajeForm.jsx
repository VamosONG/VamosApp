import { useDispatch, useSelector } from "react-redux";
import { postNewViaje } from "../../../redux/actions";
import { useState } from "react";

import { Box, Center, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack
} from '@chakra-ui/react'
import Swal from 'sweetalert2' 

import { renderToString } from 'react-dom/server';


function SolicitudViajeForm() {

    const dispatch= useDispatch();

    const infoConfirmacionViaje= useSelector((state)=>state.infoConfirmacionViaje)
    console.log(infoConfirmacionViaje)

    
    const [input,setInput]=useState({
        origin:"",
        destination:"",
        date:"",
        hour:"",
        quantityPassengers:"",
      });

      



    const handleSubmit=async(event)=>{
        event.preventDefault();
        await dispatch(postNewViaje(input));

        const confirmationText = (
            <div>
              <p>Origen: {infoConfirmacionViaje.origin}</p>
              <p>Destino: {infoConfirmacionViaje.destination}</p>
              <p>Cantidad de pasajeros: {infoConfirmacionViaje.quantityPassengers}</p>
              <p>Precio final: {infoConfirmacionViaje.price}</p>
            </div>
        );

        const confirmationHtml = renderToString(confirmationText);


        await Swal.fire({
            title: "Confirmación de traslado",
            html: confirmationHtml,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Mercado Pago",
            htmlMode: true
          }).then(async(result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Viaje reservado",
                text: "Simulando que se abonó..",
                icon: "success"
              });

              const infoAmandarAlBack={
                id:infoConfirmacionViaje.id,
                userId:infoConfirmacionViaje.userId
              }

              await dispatch(viajeConfirmado(infoAmandarAlBack)) //Agregado para guardar viaje en DB

            }
          });
    }

    const handleChange=async(e)=>{
        
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
  
    return (
  
      <div >
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} bg='gray.100' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' >
                <Heading>Datos del viaje</Heading>
                <Box>
                    <Center py={2} gap={4} >
                        
                        <FormControl isRequired>
                            <FormLabel>Desde</FormLabel>
                            <Select placeholder='Selecciona el origen' name='origin' onChange={handleChange}>
                                <option>Aeropuerto Talara</option>
                                <option>Aeropuerto Tumbes</option>
                                <option>Zona 1</option>
                                <option>Zona 2</option>
                                <option>Zona 3</option>
                                <option>Zona 4</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Hasta</FormLabel>
                            <Select placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
                            <option>Aeropuerto Talara</option>
                                <option>Aeropuerto Tumbes</option>
                                <option>Zona 1</option>
                                <option>Zona 2</option>
                                <option>Zona 3</option>
                                <option>Zona 4</option>
                            </Select>
                        </FormControl>
                    </Center>

                    <Center py={2} gap={4} >
                        <FormControl isRequired>
                            <FormLabel>Día de recojida</FormLabel>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                                name='date'
                                value={input.date}
                                onChange={handleChange} />
                        </FormControl>


                        <FormControl isRequired>
                            <FormLabel>Hora de recojida</FormLabel>
                            <Input 
                                type='time' 
                                placeholder='Hora' 
                                name='hour'  
                                value={input.hour}
                                onChange={handleChange} />
                        </FormControl>
                    </Center>


                    <Center py={2} gap={4}>
                        <FormControl as='fieldset' isRequired>
                            <FormLabel htmlFor='pasajeros'>Cantidad de pasajeros</FormLabel>
                            <Select color='#000' placeholder='Cantidad de pasajeros' id='pasajeros' name='quantityPassengers'  onChange={handleChange} >
                                {[...Array(20).keys()].map((number) => (
                                    <option key={number + 1} id={`number-${number + 1}`} value={number + 1}>
                                        {number + 1}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                <Box mt={4}>
                    <Button colorScheme='teal' variant='outline' w='100%' type='submit'>
                        Reservar viaje</Button>
                </Box>
                    </Center>
                </Box>
            </Stack>
        </form>
      </div>
      
    )
  }
  
  export default SolicitudViajeForm