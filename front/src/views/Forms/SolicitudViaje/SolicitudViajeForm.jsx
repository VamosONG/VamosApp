import { useDispatch, useSelector } from "react-redux";
import { postNewViaje } from "../../../redux/actions";
import { useEffect, useState } from "react";

import axios from 'axios';

import { Box, Center, useDisclosure, Flex } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack
} from '@chakra-ui/react'
import Swal from 'sweetalert2'

import { renderToString } from 'react-dom/server';




function SolicitudViajeForm() {

    const bgImg= "https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg"
    
    const dispatch = useDispatch();
    //trae la info del viaje de redux, donde se calcula el precio
    const infoConfirmacionViaje = useSelector((state) => state.infoConfirmacionViaje)
    console.log(infoConfirmacionViaje,"info");
    const currentUser = useSelector((state) => state.currentUser)
    console.log(infoConfirmacionViaje)
    console.log(currentUser)

    const [input, setInput] = useState({
        origin: "",
        destination: "",
        date: "",
        hour: "",
        quantityPassengers: ""
    });
    
    /////////*****************MERCADOPAGO*************************************************************** */
    
    
    
    
        const product = {
            viaje:`${input?.origin}${input?.destination}`, 
            price: Number(infoConfirmacionViaje?.price) ,
            // quantityPassengers: "1",
            userId: currentUser.id,
            origin: infoConfirmacionViaje?.origin,
            destination: infoConfirmacionViaje?.destination,
            date:infoConfirmacionViaje?.date,
            hour: infoConfirmacionViaje?.hour,
            quantityPassengers: infoConfirmacionViaje?.quantityPassengers
          }
        
        const handlePayment = async (/*product*/) => {
            console.log(product)
            const response = await axios.post("http://localhost:3001/mepago/create-order", product)
    
            window.location.href = response.data
            console.log(response.data)
        };
    
    
    
    
    
    /////////*****************MERCADOPAGO*************************************************************** */

    const [confirmed, setConfirmed] = useState(false);

    

    useEffect(() => {

        console.log(infoConfirmacionViaje)
        console.log(confirmed)

        if (infoConfirmacionViaje.price && !confirmed) {
            setConfirmed(true);
            const infoAmandarAlBack = {
                tripId: infoConfirmacionViaje.id,
                userId: infoConfirmacionViaje.userId,
            }
            console.log(infoAmandarAlBack)
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

                
                    handlePayment()
                    /* setInput({
                    origin: "",
                    destination: "",
                    date: "",
                    hour: "",
                    quantityPassengers: "",
                }); */

                Swal.fire({
                    title: "Redirigiendo a Mercado Pago",
                    text: "Aguarde unos segundos",
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
                    quantityPassengers: ""
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
            [e.target.name]: e.target.value,
            userId:currentUser.id 
        })

        
    }

    const currentDate = new Date().toISOString().split('T')[0];


    return (

  
      <div >
        <form onSubmit={handleSubmit}>
            <Box
            bgImage={bgImg}
            bgSize="cover"
            bgRepeat="no-repeat"
            justify="center"
            >
            <Flex 
            p={{ base: 8, md: 16 }}
            alignItems='center'
            alignContent="center"
            direction="column"
            maxW={{ base: "100%", md: "80%", lg: "60%" }}
            mx="auto"
            marginTop={{ base: 0, md: 20 }}
            >
            <Stack 
            bg='#009ED1'
            spacing={6} 
            p={{ base: 4, md: 5 }}
            h='auto' 
            width={{ base: "100%", md: "80%", lg: "60%" }}
            borderRadius='xl' 
            boxShadow='dark-lg'
            
            >
                <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                fontFamily="'DIN Alternate Black', sans-serif"
                >DATOS DEL VIAJE</Heading>
                <Box>
                    {/* <Center py={2} gap={4} > */}
                        
                        <FormControl isRequired>
                            <FormLabel  
                            fontSize="2xl"
                            fontFamily="'DIN Medium',"
                            >Desde</FormLabel>
                            <Select 
                            bg="white" 
                            placeholder='Selecciona el origen' 
                            name='origin'
                            onChange={handleChange}
                            width={{ base: "100%", md: "auto" }}
                            styles={{ menu: { width: "auto", maxWidth: "100%" } }}
                            >
                                <option>AEROPUERTO TALARA</option>
                                <option>AEROPUERTO TUMBES</option>
                                <option>DECAMERON PUNTA SAL</option>
                                <option>ZORRITOS</option>
                                <option>MANCORA</option>
                                <option>DECAMERON</option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel 
                            fontSize="2xl"
                            fontFamily="'DIN Medium',"
                            >Hasta</FormLabel>
                            {input.origin==='AEROPUERTO TALARA'?(
                                <Select bg="white" placeholder='Selecciona el destino' name='destination' onChange={handleChange}>
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
                    {/* </Center> */}

                    </Box>

                    <Box>
                    {/* <Center py={2} gap={4} > */}
                        <FormControl isRequired>
                            <FormLabel 
                            fontSize="2xl"
                            fontFamily="'DIN Medium',"
                            >Fecha</FormLabel>
                            <Input
                                bg="white"
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                                name='date'
                                value={input.date}
                                onChange={handleChange}
                                min={currentDate} />
                        </FormControl>

                        </Box>
                        <Box>
                        <FormControl isRequired>
                            <FormLabel 
                            fontSize="2xl"
                            fontFamily="'DIN Medium',"
                            >Hora</FormLabel>
                            <Input 
                                bg="white"
                                type='time' 
                                placeholder='Hora' 
                                name='hour'  
                                value={input.hour}
                                onChange={handleChange} />
                        </FormControl>
                        </Box>

                        <Box>

                    {/* <Center py={2} gap={4}> */}
                        <FormControl as='fieldset' isRequired>
                            <FormLabel htmlFor='pasajeros' 
                            fontSize="2xl"
                            fontFamily="'DIN Medium',"
                            >Cantidad de pasajeros</FormLabel>
                            <Select bg="white" placeholder='Cantidad de pasajeros' id='pasajeros' name='quantityPassengers'  onChange={handleChange} >
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
                </Box>

                <Box mt={4}>
                    <Button bg='#E83D6F' fontFamily="'DIN Medium'," w='100%' type='submit' fontSize="1xl" >
                        RESERVAR
                        </Button>
                </Box>
                    {/* </Center> */}
                    {/* </Center> */}
            </Stack>
            </Flex>
            </Box>
        </form> 

        </div>
    )
}

export default SolicitudViajeForm
