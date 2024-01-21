import { useDispatch, useSelector } from "react-redux";
import { postNewViaje, viajeConfirmado } from "../../../redux/actions";
import { useEffect, useState } from "react";

import axios from 'axios';

import { Box, Center, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack
} from '@chakra-ui/react'
import Swal from 'sweetalert2'

import { renderToString } from 'react-dom/server';




function SolicitudViajeForm() {
    
    const dispatch = useDispatch();
    //trae la info del viaje de redux, donde se calcula el precio
    const infoConfirmacionViaje = useSelector((state) => state.infoConfirmacionViaje)
    const currentUser = useSelector((state) => state.currentUser)
    console.log(infoConfirmacionViaje)

    const [input, setInput] = useState({
        origin: "",
        destination: "",
        date: "",
        hour: "",
        quantityPassengers: "",
    });
    
    /////////*****************MERCADOPAGO*************************************************************** */
    
    
    
    
        const product = {
            viaje:`${input.origin}${input.destination}`, 
            price: 100,
            quantityPassengers: input.quantityPassengers
          }
        
        const handlePayment = async (/*product*/) => {
           
            const response = await axios.post("http://localhost:3001/mepago/create-order", product)
    
            window.location.href = response.data
        };
    
    
    
    
    
    /////////*****************MERCADOPAGO*************************************************************** */

    const [confirmed, setConfirmed] = useState(false);

    

   

   

   
 
    useEffect(() => {
        console.log(currentUser)
        if (infoConfirmacionViaje.id && !confirmed) {
            setConfirmed(true);
            const infoAmandarAlBack = {
                tripId: infoConfirmacionViaje.id,
                userId: infoConfirmacionViaje.userId,
             
              }
              const confirmationText = (
                <div>
                    <p>Origen: {infoConfirmacionViaje.origin}</p>
                    <p>Destino: {infoConfirmacionViaje.destination}</p>
                    <p>Cantidad de pasajeros: {infoConfirmacionViaje.quantityPassengers}</p>
                    <p>Precio final: {infoConfirmacionViaje.price}</p>
                </div>
            );
        
              Swal.fire({
                title: "Confirmación de traslado",
                html: renderToString(confirmationText),
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Pagar con MercadoPago",

                 showClass: {
                    popup: 'animate__animated animate__fadeInDown',
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp',
                  },
                  preConfirm: async () => {
                    


                htmlMode: true}
            }).then(async(result) => {
              if (result.isConfirmed) {

                  await dispatch(viajeConfirmado(infoAmandarAlBack)) //Agregado para guardar viaje en DB
                  
                  /* setInput({
                    origin: "",
                    destination: "",
                    date: "",
                    hour: "",
                    quantityPassengers: "",
                }); */

                Swal.fire({
                  title: "Viaje reservado",
                  text: "Simulando que se abonó..",
                  icon: "success"
                }).then(() => {
                    
                    
                    window.history.back();
                  });
            }else {
                // Restablecer valores al cancelar
                setInput({
                    origin: "",
                    destination: "",
                    date: "",
                    hour: "",
                    quantityPassengers: "",
                });
            }})}
          }, [infoConfirmacionViaje, dispatch, /* confirmationText */]);
        ;




    const handleSubmit = async (event) => {
        event.preventDefault();
        await setInput({
            ...input,
        })


        setConfirmed(false); // Restablecer a false al enviar el formulario

        await dispatch(postNewViaje(input));
        

    }
    const handleChange = async (e) => {
        /* if (e.target.name==='origin'&&(e.target.value==='ZORRITOS'||e.target.value==='DECAMERON')){
            let defaultDestination
            if (e.target.value==='ZORRITOS'){
            defaultDestination='AEROPUERTO TUMBES'
            }
            if (e.target.value==='DECAMERON'){
            defaultDestination='AEROPUERTO TALARA'
            }
            setInput({
                ...input,
                destination: defaultDestination
            })
        } */
        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        
    }

    const currentDate = new Date().toISOString().split('T')[0];


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
                                <option>AEROPUERTO TALARA</option>
                                <option>AEROPUERTO TUMBES</option>
                                <option>DECAMERON PUNTA SAL</option>
                                <option>ZORRITOS</option>
                                <option>MANCORA</option>
                                <option>DECAMERON</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Hasta</FormLabel>
                            {input.origin==='AEROPUERTO TALARA'?(
                                <Select placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
                                <option>MANCORA</option>
                                <option>DECAMERON</option>
                                </Select>
                            ):(
                                input.origin==='AEROPUERTO TUMBES'?(
                                    <Select placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
                                    <option>DECAMERON PUNTA SAL</option>
                                    <option>ZORRITOS</option>
                                    <option>MANCORA</option>
                                    </Select>
                            ):(
                                input.origin==='MANCORA'?(
                                <Select placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
                                <option>AEROPUERTO TALARA</option>
                                <option>AEROPUERTO TUMBES</option>
                                </Select>
                                ):(input.origin==='DECAMERON PUNTA SAL'?(
                                    <Select placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
                                    <option>AEROPUERTO TUMBES</option>
                                    </Select>
                                    ):(input.origin==='ZORRITOS'?(
                                        <Select placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
                                        <option>AEROPUERTO TUMBES</option>
                                        </Select>
                                        ):(input.origin==='DECAMERON'?(
                                            <Select placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
                                            <option>AEROPUERTO TALARA</option>
                                            </Select>
                                            ):(null))))))}
                       
                        </FormControl>
                    </Center>

                    <Center py={2} gap={4} >
                        <FormControl isRequired>
                            <FormLabel>Fecha</FormLabel>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                                name='date'
                                value={input.date}
                                onChange={handleChange}
                                min={currentDate} />
                        </FormControl>


                        <FormControl isRequired>
                            <FormLabel>Hora</FormLabel>
                            <Input 
                                type='time' 
                                placeholder='Hora' 
                                name='hour'  
                                value={input.hour}
                                onChange={handleChange} />
                        </FormControl>
                    


                    {/* <Center py={2} gap={4}> */}
                        <FormControl as='fieldset' isRequired>
                            <FormLabel htmlFor='pasajeros'>Cantidad de pasajeros</FormLabel>
                            <Select color='#000' placeholder='Cantidad de pasajeros' id='pasajeros' name='quantityPassengers'  onChange={handleChange} >
                                {((input.origin === "AEROPUERTO TALARA" && input.destination === "MANCORA") ||
          (input.origin === "MANCORA" && input.destination === "AEROPUERTO TALARA"))?([...Array(15).keys()].map((number) => (
                                    <option key={number + 1} id={`number-${number + 1}`} value={number + 1}>
                                        {number + 1}
                                    </option>
                                ))):(
                                    [...Array(10).keys()].map((number) => (
                                        <option key={number + 1} id={`number-${number + 1}`} value={number + 1}>
                                            {number + 1}
                                        </option>
                                    ))
                                )}
                            </Select>
                        </FormControl>

                <Box mt={4}>
                    <Button colorScheme='teal' variant='outline' w='100%' type='submit'>
                        Reservar viaje</Button>
                </Box>
                    {/* </Center> */}
                    </Center>
                </Box>
            </Stack>
        </form>
      </div>
      

    )
}

export default SolicitudViajeForm
