import { Box, Flex, } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Tag,
    TagLabel,
} from '@chakra-ui/react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Avatar, Badge, Text, Heading
} from '@chakra-ui/react'
import { getAllConductores, getCanceledTrips, getPendingTrips, getReservedTrips } from '../../redux/actions';
import { StarIcon, } from '@chakra-ui/icons';
import { BsBoxArrowInDownLeft, BsBoxArrowDownRight } from "react-icons/bs";
import axios from 'axios';

const AdminProfile = () => {
    const dispatch = useDispatch();
    const dataDrivers = useSelector((state) => state.conductores)
    const viajesReservados = useSelector((state) => state.viajesReservados)
    const viajesPendientes = useSelector((state) => state.viajesPendientes)
    const viajesCompletados = useSelector((state) => state.viajesCompletados)
    // const users = useSelector((state) => state.newUsuario)
    console.log(dataDrivers);
    const [reviews, setReviews] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getAllConductores())
                await dispatch(getReservedTrips())
                await dispatch(getPendingTrips())
                await dispatch(getCanceledTrips())
                const response = await axios('http://localhost:3001/reviews');
                setReviews(response.data);
                const res = await axios('http://localhost:3001/user');
                setUsers(res.data);
            } catch (error) {
                console.error('Error en la solicitud de reviews', error);
            }
        };

        fetchData();
    }, [])

    return (
        <>
            <Box top='100px' bg='lightblue' h='auto' py='1rem' w='100%' position={'relative'} my='1rem'>
                <Flex display={'flex'} bg={'green'} justify={{ base: 'center', md: 'center' }} align={{ base: 'center', md: 'center' }} flexWrap={'nowrap'} overflow={'hidden'} position={'relative'} gap={8} w='100%' p='1rem'>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={8}>

                    <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='green.400' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'}>
                            <Heading fontSize={'1rem'} position={'relative'}>Reservas</Heading>
                            {users?.map((user) => (
                                <Flex key={user.id} bg='gray.100' borderRadius={5} py='1' >
                                    <Box ml='3' textAlign={'start'} overflow={'hidden'} >
                                        <Flex flexDirection={'column'} gap='2'>
                                            <Badge  variant='outline' colorScheme='green' whiteSpace={'nowrap'} >
                                                {user.id}
                                            </Badge>
                                            <Badge  variant='solid' colorScheme='purple' whiteSpace={'nowrap'}>
                                                {user.name}
                                            </Badge>
                                        </Flex>
                                        <Text fontSize='sm'>{user.email}</Text>
                                        <Badge  variant='subtle' colorScheme='blue'>
                                                {user.phone}
                                            </Badge>
                                    </Box>
                                </Flex>
                            ))}
                        </Flex>

                        <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='green.400' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'}>
                            <Heading fontSize={'1rem'} >Reservas</Heading>
                            {viajesReservados?.map((trips) => (
                                <Flex key={trips.id} bg='gray.100' borderRadius={5} py='1'>
                                    <Box ml='3' textAlign={'start'} overflow={'hidden'} >
                                        <Flex flexDirection={'column'} gap='2'>
                                            <Badge  variant='outline' colorScheme='green' whiteSpace={'nowrap'} >
                                                {trips.origin}
                                            </Badge>
                                            <Badge  variant='solid' colorScheme='purple' whiteSpace={'nowrap'}>
                                                {trips.destination}
                                            </Badge>
                                        </Flex>
                                        <Text fontSize='sm'>{trips.date}</Text>
                                        <Badge  variant='subtle' colorScheme='blue'>
                                                {trips.hour}
                                            </Badge>
                                    </Box>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>

                    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={8}>
                        <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='blue.300' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'}>
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

                        <Flex w={{ base: '10rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='blue.200' borderRadius={'lg'} p='.5rem' flexDirection={'column'} gap={1} overflowY={'auto'} >
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

                <Flex display={'flex'} flexDirection={{ base: 'column', md: 'row' }} bg={'green.200'} justify={{ base: 'center', md: 'center' }} align={{ base: 'center', md: 'center' }} flexWrap={'nowrap'} overflow={'hidden'} position={'relative'} gap={10} w='100%' p='1rem'>

                    <Flex w={{ base: '22rem', md: '670px' }} h={{ base: '10rem', md: '250px' }} bg='blue.200' borderRadius={'lg'} p='.5rem'>
                        Datos de del pedidos por mes/semana/dia
                    </Flex>

                    <Flex w={{ base: '22rem', md: '200px' }} h={{ base: '10rem', md: '250px' }} bg='yellow.200' borderRadius={'lg'} p='.5rem'
                        flexDirection={'column'} gap={1} overflowY={'auto'}>
                        <Heading fontSize={'1rem'} >Conductores</Heading>
                        {dataDrivers?.map((driver) => (
                            <Flex key={driver.id} bg='gray.100' borderRadius={5} py='1'>
                                <Avatar src={driver.driverImg} />
                                <Box ml='3' textAlign={'start'}>
                                    <Text fontWeight='bold'>
                                        {driver.name}
                                        <Badge ml='1' colorScheme='green'>
                                            {!driver.driverState ? 'Activo' : 'Descanso'}
                                        </Badge>
                                    </Text>
                                    <Text fontSize='sm'>{driver.airports}</Text>
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