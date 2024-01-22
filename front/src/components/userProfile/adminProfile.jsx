import { Box, Flex, } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';

import {
    Avatar, Badge, Text, Heading, Center, Progress, Stack, Image, Button, Link as ChakraLink,
} from '@chakra-ui/react'
import { getAllConductores, getAllPrices, getCanceledTrips, getDetailUserById, getPendingTrips, getReservedTrips } from '../../redux/actions';
import { StarIcon, EditIcon } from '@chakra-ui/icons';
import { BsBoxArrowInDownLeft, BsBoxArrowDownRight, BsFillPersonFill, } from "react-icons/bs";
import axios from 'axios';
import { useParams } from "react-router-dom";
import ImgMancora from '../../assets/imgPlaces/mancora.jpeg'
import ImgZorrito from '../../assets/imgPlaces/zorritos.jpg'
import ImgDecameron from '../../assets/imgPlaces/decameron.jpg'
import { FaArrowLeft } from 'react-icons/fa';

const AdminProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const dataDrivers = useSelector((state) => state.conductores)
    const viajesReservados = useSelector((state) => state.viajesReservados)
    const viajesPendientes = useSelector((state) => state.viajesPendientes)
    const viajesCompletados = useSelector((state) => state.viajesCompletados)
    const dataPrices = useSelector((state) => state.allPrices)
    console.log(dataPrices);
    const users = useSelector((state) => state.newUsuario)
    const [reviews, setReviews] = useState([])
    // const [users, setUsers] = useState([])

    const scrollbarStyles = {
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'white',
          borderRadius: '1rem',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#10447E',
          borderRadius: '1rem',
        },
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getAllConductores())
                await dispatch(getReservedTrips())
                await dispatch(getPendingTrips())
                await dispatch(getCanceledTrips())
                await dispatch(getDetailUserById(id))
                await dispatch(getAllPrices())
                const response = await axios('http://localhost:3001/reviews');
                setReviews(response.data);
                // const res = await axios('http://localhost:3001/user');
                // setUsers(res.data);
            } catch (error) {
                console.error('Error en la solicitud de reviews', error);
            }
        };

        fetchData();
    }, [id])

    const handleClick=()=>{
        window.history.back();
    }

    return (
        <>
            <Box  bg='gray.100' h='auto' py='1rem' w='100%' position={'relative'} my='1rem'>
            <Link to="/" className="back-button">
                <Button 
                onClick={()=>handleClick()}
                display="inline-flex"
                alignItems="center"
                padding="8px 16px"
                borderRadius="md"
                borderWidth="1px"
                borderColor="#10447E"
                color="#10447E"
                fontWeight="semibold"
                _hover={{ bg: '#009ED1', color: 'white' }}
                >
                <FaArrowLeft style={{ marginRight: '8px' }} /> INICIO
                </Button>
                </Link>
                <Flex display={'flex'}  justify={{ base: 'center', md: 'center' }} align={{ base: 'center', md: 'center' }} flexWrap={'nowrap'} overflow={'hidden'} position={'relative'} gap={8} w='100%' p='1rem'>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={8}>

                        <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='#009ED1' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'} css={scrollbarStyles}>
                            <Heading fontSize={'1rem'} position={'relative'}>Perfil</Heading>
                            {users ? (
                                <Flex key={users?.id} bg='gray.100' borderRadius={5} py='1' >
                                    <Box ml='3' textAlign={'start'} overflow={'hidden'} >
                                        <Flex flexDirection={'column'} gap='2'>
                                            <Badge variant='outline' colorScheme='green' whiteSpace={'nowrap'} >
                                                {users.id ? users.id : 'No trae id'}
                                            </Badge>
                                            <Badge variant='solid' colorScheme='purple' whiteSpace={'nowrap'}>
                                                {users.name ? users.name : 'no trae Name'}
                                            </Badge>
                                        </Flex>
                                        <Text fontSize='sm'>{users.email ? users.email : 'No trae email'}</Text>
                                        <Badge variant='subtle' colorScheme='blue'>
                                            {users.phone ? users.phone : 'No trae phone'}
                                        </Badge>
                                    </Box>
                                </Flex>
                            ) : (
                                <Text>Loading...</Text>
                            )}
                        </Flex>

                        <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='#009ED1' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'}  css={scrollbarStyles}>
                            <Heading fontSize={'1rem'} >Reservas</Heading>
                            {viajesReservados?.map((trips) => (
                                <Flex key={trips.id} bg='gray.100' borderRadius={5} py='1'>
                                    <Box ml='3' textAlign={'start'} overflow={'hidden'} >
                                        <Flex flexDirection={'column'} gap='2'>
                                            <Badge variant='outline' colorScheme='green' whiteSpace={'nowrap'} >
                                                {trips.origin}
                                            </Badge>
                                            <Badge variant='solid' colorScheme='purple' whiteSpace={'nowrap'}>
                                                {trips.destination}
                                            </Badge>
                                        </Flex>
                                        <Text fontSize='sm'>{trips.date}</Text>
                                        <Badge variant='subtle' colorScheme='blue'>
                                            {trips.hour}
                                        </Badge>
                                    </Box>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>

                    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={8}>
                        <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='#009ED1' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'} css={scrollbarStyles}>
                            <Heading fontSize={'1rem'} >Viajes</Heading>
                            {viajesCompletados?.map((trips) => (
                                <Flex key={trips.id} bg='gray.100' borderRadius={5} py='1'>
                                    <Box ml='3' textAlign={'start'}>
                                        <Text fontWeight='bold'>
                                            {trips.origin}
                                            <Badge ml='1' colorScheme='green'>
                                                {trips.destination}
                                            </Badge>
                                        </Text>
                                        <Text fontSize='sm'>{trips.date}</Text>
                                    </Box>
                                </Flex>
                            ))}
                        </Flex>

                        <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='#009ED1' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'} css={scrollbarStyles}>
                            <Heading fontSize={'1rem'} >Reviews</Heading>
                            {reviews?.map((review) => (
                                <Flex key={review.userId} bg={review.qualification < 3 ? 'red.100' : 'gray.100'} borderRadius={5} py='1' >
                                    <Box ml='3' textAlign={'start'}>
                                        <Text fontWeight='bold'>
                                            {review.userName ? review.userName : 'User Test'}
                                            <Badge ml='1' colorScheme='green'>
                                                {review.date}
                                            </Badge>
                                        </Text>
                                        <Text fontSize='sm'>{review.comments}</Text>
                                        <Box display='flex' mt='2' alignItems='center'>
                                            {Array(5)
                                                .fill('')
                                                .map((_, i) => (
                                                    <StarIcon key={i} color={i < review.qualification ? 'yellow.500' : 'gray.300'} />
                                                ))}
                                            <Box as='span' ml='2' color='gray.600' fontSize='md' textAlign={'start'}>
                                                <Text>
                                                    {review.qualification}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>

                <Flex display={'flex'} flexDirection={{ base: 'column', md: 'row' }}  justify={{ base: 'center', md: 'center' }} align={{ base: 'center', md: 'center' }} flexWrap={'nowrap'} overflow={'hidden'} position={'relative'} gap={10} w='100%' p='1rem' >

                    <Flex w={{ base: '22rem', md: '670px' }} h={{ base: '10rem', md: '250px' }} borderRadius={'lg'} p='.5rem' overflowX='auto' css={scrollbarStyles} bg='#009ED1'>

                        {dataPrices?.map((pack, index) => (
                            <Box w={{ base: '10rem', md: '500px' }}
                                h={{ base: '10rem', md: 'auto' }} borderWidth='1px' borderRadius='lg' key={index}
                                bg={'gray.100'} mx='2' >

                                <Image src={pack.zone === 'MANCORA' ? ImgMancora : pack.zone === 'DECAMERON' || pack.zone === 'DECAMERON PUNTA SAL' ? ImgDecameron : pack.zone === 'ZORRITOS' ? ImgZorrito : null} alt={pack.zone}
                                    w={{ base: '10rem', md: '100%' }}
                                    h={{ base: '5rem', md: '7rem' }}
                                    objectFit={'cover'} 
                                    borderTopRadius={8}/>

                                <Box p='1'>
                                    <Box display='flex' alignItems='baseline' justifyContent={'space-between'} gap='2'>
                                        <Badge borderRadius='full' px='2' colorScheme='green' whiteSpace={'nowrap'}>
                                            {pack.zone}
                                        </Badge>
                                        <Flex gap={2} fontSize={'.8rem'} color={'gray.600'} whiteSpace={'nowrap'}>
                                            &bull; {pack.quantityPassengers} <BsFillPersonFill />
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Badge borderRadius='full' px='2' colorScheme='blue' whiteSpace={'nowrap'}>
                                            {pack.airport}
                                        </Badge>
                                    </Box>


                                    <Box>
                                        {pack.value}
                                        <Box as='span' color='green.600' fontSize='sm' fontWeight={'bold'}>
                                            /s
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Link>Editar <EditIcon /> </Link>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Flex>

                    <Flex css={scrollbarStyles} w={{ base: '22rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='#009ED1' borderRadius={'lg'} p='.5rem'
                        flexDirection={'column'} gap={1} overflowY={'auto'}>
                        <Heading fontSize={'1rem'} >Conductores</Heading>
                        {dataDrivers?.map((driver) => (
                            <Flex key={driver.id} bg={!driver.driverState ? '#EEFFF5' : ' #FFEEEE'} borderRadius={5} py='1'>
                                <Avatar src={driver.driverImg} />
                                <Box ml='3' textAlign={'start'}>
                                    <Text fontWeight='bold' >
                                        {driver.name}
                                        <Badge ml='1' colorScheme={!driver.driverState ? 'green' : 'red'}>
                                            {!driver.driverState ? 'Activo' : 'Descanso'}
                                        </Badge>
                                    </Text>
                                    <Text fontSize='sm' >{driver.airports}</Text>
                                </Box>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default AdminProfile;