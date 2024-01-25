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
    const [placeholderValue, setPlaceholderValue] = useState("Seleccione el origen");


    const bgImg = "https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg"

    const dispatch = useDispatch();
    //trae la info del viaje de redux, donde se calcula el precio
    const infoConfirmacionViaje = useSelector((state) => state.infoConfirmacionViaje)
    console.log(infoConfirmacionViaje, "info");
    const currentUser = useSelector((state) => state.currentUser)
    console.log(infoConfirmacionViaje)
    console.log(currentUser)

    const storedInput = localStorage.getItem('solicitudViajeInput');
    const parsedData = JSON.parse(storedInput);
    const [input, setInput] = useState({
        origin: parsedData.origin,
        destination: parsedData.destination,
        date: parsedData.date,
        hour: parsedData.hour,
        quantityPassengers: parsedData.quantityPassengers
    });


   
    /////////*****************MERCADOPAGO*************************************************************** */




    const product = {
        viaje: `${input?.origin}${input?.destination}`,
        price: Number(infoConfirmacionViaje?.price),
        // quantityPassengers: "1",
        userId: currentUser.id,
        origin: infoConfirmacionViaje?.origin,
        destination: infoConfirmacionViaje?.destination,
        date: infoConfirmacionViaje?.date,
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

    const [localStorageDataLoaded, setLocalStorageDataLoaded] = useState(false);

    useEffect(() => {
        console.log(infoConfirmacionViaje);
        console.log(confirmed);

        if (infoConfirmacionViaje.price && !confirmed) {
            setConfirmed(true);
            const infoAmandarAlBack = {
                tripId: infoConfirmacionViaje.id,
                userId: infoConfirmacionViaje.userId,
            };
            console.log(infoAmandarAlBack);
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
                    // Lógica antes de la confirmación
                },
                htmlMode: true
            }).then(async (result) => {
                if (result.isConfirmed) {
                    handlePayment();

                    Swal.fire({
                        title: "Redirigiendo a Mercado Pago",
                        text: "Aguarde unos segundos",
                        icon: "success"
                    }).then(() => {
                        window.history.back();
                    });
                }
                else {
                    // Restablecer valores al cancelar
                    const parsedData = JSON.parse(storedInput);
                    setInput({
                        origin: parsedData.origin,
                        destination: parsedData.destination,
                        date: parsedData.date,
                        hour: parsedData.hour,
                        quantityPassengers: parsedData.quantityPassengers
                    });
                }
            });
        }
        const storedInput = localStorage.getItem('solicitudViajeInput');
        if (storedInput) {
            try {
                const parsedData = JSON.parse(storedInput);

                setInput({
                    origin: parsedData.origin,
                    destination: parsedData.destination,
                    date: parsedData.date,
                    hour: parsedData.hour,
                    quantityPassengers: parsedData.quantityPassengers
                });
                setPlaceholderValue(parsedData.origin);
                setLocalStorageDataLoaded(true);
            } catch (error) {
                console.error('Error al analizar los datos de localStorage:', error);
            }
        }
        if (parsedData) {
            setInput({
                origin: parsedData.origin,
                destination: parsedData.destination,
                date: parsedData.date,
                hour: parsedData.hour,
                quantityPassengers: parsedData.quantityPassengers
            });
        } else {
            setInput({
                origin: "",
                destination: "",
                date: "",
                hour: "",
                quantityPassengers: ""
            })
        }
    }, [infoConfirmacionViaje, dispatch]);
    console.log('placeholderValue:', placeholderValue);



    const handleSubmit =(event) => {
        event.preventDefault();
        setInput({
            ...input,
        });

        setConfirmed(false);
        localStorage.setItem('solicitudViajeInput', JSON.stringify(input));

        dispatch(postNewViaje(input));
    };
    console.log("este es el input que se envía al back para postear el trip: ", input);
    console.log(JSON.parse(localStorage.solicitudViajeInput));

    const handleChange = async (e) => {
        // Almacenar el nuevo valor en una variable
        const updatedInput = {
            ...input,
            [e.target.name]: e.target.value,
            userId: currentUser.id,
        };
        console.log("este es el input ", input);

        // Actualizar el estado
        setInput(updatedInput);

        // Actualizar el localStorage con el último estado después de la actualización
        localStorage.setItem('solicitudViajeInput', JSON.stringify(updatedInput));
    };
    const currentDate = new Date().toISOString().split('T')[0];
    console.log('handleChange:', input);

    

    

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
                                    {parsedData.origin ?(
                                       
                                    
                                    <Select
                                    bg="white"
                                    placeholder={parsedData.origin}
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
                                ):(
                                    <Select
                                    bg="white"
                                    placeholder="Selecciona un origen"
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
                                )}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel
                                        fontSize="2xl"
                                        fontFamily="'DIN Medium',"
                                    >Hasta</FormLabel>
                                        <Select
                                            bg="white"
                                            placeholder="Selecciona el destino"
                                            name='destination'
                                            onChange={handleChange}
                                            value={input.destination || (parsedData.destination ? parsedData.destination : '')}
                                        >
                                            {(parsedData.destination && !input.destination) && (
                                                <option>{parsedData.destination}</option>
                                            )}
                                            {parsedData.origin === 'AEROPUERTO TALARA' && (
                                                <>
                                                    <option>MANCORA</option>
                                                    <option>DECAMERON</option>
                                                </>
                                            )}
                                            {input.origin === 'AEROPUERTO TUMBES' && (
                                                <>
                                                    <option>DECAMERON PUNTA SAL</option>
                                                    <option>ZORRITOS</option>
                                                    <option>MANCORA</option>
                                                </>
                                            )}
                                            {input.origin === 'MANCORA' && (
                                                <>
                                                    <option>AEROPUERTO TALARA</option>
                                                    <option>AEROPUERTO TUMBES</option>
                                                </>
                                            )}
                                            {input.origin === 'ZORRITOS' && (
                                                <>
                                                    <option>AEROPUERTO TUMBES</option>
                                                </>
                                            )}
                                            {input.origin === 'DECAMERON PUNTA SAL' && (
                                                <>
                                                    <option>AEROPUERTO TUMBES</option>
                                                </>
                                            )}
                                            {input.origin === 'DECAMERON' && (
                                                <>
                                                    <option>AEROPUERTO TALARA</option>
                                                </>
                                            )}
                                        </Select>

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
                                    <Select bg="white"  placeholder={parsedData.quantityPassengers} id='pasajeros' name='quantityPassengers' onChange={handleChange} >
                                        {((input.origin === "AEROPUERTO TALARA" && input.destination === "MANCORA") ||
                                            (input.origin === "MANCORA" && input.destination === "AEROPUERTO TALARA")) ? ([...Array(15).keys()].map((number) => (
                                                <option key={number + 1} id={`number-${number + 1}`} value={number + 1}>
                                                    {number + 1}
                                                </option>
                                            ))) : (
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
