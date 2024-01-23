import { useEffect, useState } from 'react';
import { StarIcon, EditIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons';
import OrderFilterAlphabetical from '../driversViewAdmin/filtersData/orderFilter';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Avatar, Tooltip,
    TableContainer, Button, Flex, useDisclosure, Link, Box, Badge, Text
} from '@chakra-ui/react'
import axios from 'axios'
import ReviewFilter from '../driversViewAdmin/filtersData/reviewFilter';
import { useDispatch, useSelector } from "react-redux";
import { getReviewsData } from '../../redux/actions';

const ReviewAdmin = () => {

    const dispatch = useDispatch()

    const reviews = useSelector((state) => state.reviewsData)

    console.log('review en tabla ' + reviews);

    useEffect(() => {
        dispatch(getReviewsData())
    }, [dispatch])

    return (
        <TableContainer mt={'100px'} >
            <Flex bg='gray.200' color='#000' justify={'center'} ><ReviewFilter /></Flex>
            <Flex px='1rem' >
                <Table variant='striped' colorScheme='gray.100' >
                    <TableCaption>Reviews</TableCaption>
                    <Thead>
                        <Tr>
                            <Th >Usuario</Th>
                            <Th >E-mail</Th>
                            <Th>Fecha</Th>
                            <Th>comentario</Th>
                            <Th>chofer</Th>
                            <Th>Calificacion</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {reviews?.map((review, index) => (
                            <Tr key={review.id} bg={review.qualification <= 3 ? 'red.100' : null} >
                                <Td w='auto' >{review.userName ? review.userName : 'User Test'}</Td>
                                <Td w='min-content' >
                                    <Tooltip hasArrow label={review.userMail !== 'Email bloqueado' ? 'Enviar Correo' : null} bg='#10447E' placement='top'>
                                        <Link href={`mailto:${review.userMail}`}>
                                            {review.userMail} <EmailIcon/>
                                        </Link>
                                    </Tooltip>
                                </Td>
                                <Td w='auto' >{review.date}</Td>
                                <Td w='auto' >{review.comments}</Td>
                                <Td w='auto' display={'flex'} flexDirection={'column'}>
                                    <Badge variant='solid' colorScheme='green' w='max-content'>
                                        {review.driverName}
                                    </Badge>

                                    <Tooltip hasArrow label={review.driverPhone !== 'Numero oculto' ? 'Contactar' : null} bg='#10447E' placement='top'>
                                        <Link href={`whatsapp://send?phone=+51${review.driverPhone}`} >
                                            {review.driverPhone} <ChatIcon/>
                                        </Link>
                                    </Tooltip>
                                </Td>

                                <Td w='auto' >  {Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <StarIcon key={i} color={i < review.qualification ? 'yellow.500' : 'gray.300'} />
                                    ))} </Td>

                            </Tr>
                        ))}

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th >Usuario</Th>
                            <Th >E-mail</Th>
                            <Th>Fecha</Th>
                            <Th>comentario</Th>
                            <Th>chofer</Th>
                            <Th>Calificacion</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </Flex>
            {/* COMPONENTE DE PAGINADO */}
            {/* <Paginado/>  */}
        </TableContainer>
    )
}

export default ReviewAdmin