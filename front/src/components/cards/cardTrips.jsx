import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Divider, Flex, Link, ButtonGroup, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ImgMancora from '../../assets/imgPlaces/mancora.jpeg'
import ImgZorrito from '../../assets/imgPlaces/zorritos.jpg'
import ImgDecameron from '../../assets/imgPlaces/decameron.jpg'
import { BsAlarm, BsCalendar3, BsCursorFill, BsFillGeoFill, BsPersonFill, BsCurrencyDollar, BsChevronDoubleRight, BsChevronDoubleLeft, BsAirplaneFill } from "react-icons/bs";


const CardTrips = () => {
    const [trips, setTrips] = useState('')
    console.log('trips ', trips);
    useEffect(() => {
        // Definir una función asíncrona dentro del useEffect
        async function fetchData() {
            try {
                // Puedes usar await dentro de esta función
                const response = await axios('https://vamosappserver.onrender.com/prices');
                // Hacer algo con la respuesta
                if (response.data) {
                    setTrips(response.data);
                }
            } catch (error) {
                // Manejar errores si es necesario
                console.error('Error fetching data:', error);
            }
        }

        // Llamar a la función asíncrona inmediatamente
        fetchData();
    }, []);

    

    return (
        <>
            {trips.length && trips.map((trip, index) => (
                <>
                    <Card maxW='sm' position={'relative'} bg='whitesmoke' boxShadow={'0 0 10px green'} >
                        <CardBody key={index} id={trip.id} position={'relative'}>
                            <img
                                src={trip.zone === 'MANCORA' ? ImgMancora : trip.zone === 'ZORRITOS' ? ImgZorrito : ImgDecameron}
                                alt="Nombre alternativo de la imagen"

                            />
                            <Stack mt='2' spacing='2'>
                                <Flex flexDirection={'column'}  >
                                    <Heading size='sm'>{trip.zone}</Heading>
                                    <Text color='#10447E' fontSize='sm' display={'flex'} justifyContent={'space-evenly'}>
                                        <BsAirplaneFill /> {trip.airport}
                                    </Text>
                                </Flex>
                                <Flex flexDirection={'column'}>
                                    <Text fontSize={'.8rem'}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nostrum pariatur?
                                    </Text>
                                    <Flex justify={'space-between'} align={'center'}>
                                        <Text color='green' fontWeight={'bold'} display={'flex'} justifyContent={'space-evenly'}  >
                                            <BsCurrencyDollar />{trip.value}
                                        </Text>
                                        <Text color='#10447E' display={'flex'} justifyContent={'space-evenly'}>
                                            <BsPersonFill /> {trip.quantityPassengers}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Stack>
                        </CardBody>
                        <Flex justify={'center'}>
                            <Link to='/'>
                                <Text variant='ghost' colorScheme='blue' id={trip.id}>
                                    Reservar
                                </Text>
                            </Link>
                        </Flex>
                    </Card>
                </>
            ))}
        </>
    )
}

export default CardTrips