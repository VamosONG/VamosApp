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
// import Paginado from '../../components/paginado/paginadoComponent';


const ReviewAdmin = () => {

    const reviews = useSelector((state) => state.reviewsData)
    const dispatch = useDispatch()

    const [search , setSearch] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? reviews : reviews.filter((data) => data.userName && data.userName.toLowerCase().includes(search.toLowerCase()) || data.userMail && data.userMail.toLowerCase().includes(search.toLowerCase()) || data.driverName && data.driverName.toLowerCase().includes(search.toLowerCase())
)

    useEffect(() => {
        dispatch(getReviewsData())
    }, [])

    return (
        <Flex alignItem='center' justifyContent='center'>

        <TableContainer >
            <Flex bg="purple.500" color="#000" justify={'center'} p={4} borderTopLeftRadius="md" borderTopRightRadius="md">
                <ReviewFilter searcher={searcher} />
                </Flex>
            <Flex px={4} bg='gray.300' overflowX="auto" borderBottomLeftRadius="md" borderBottomRightRadius="md">
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
                        {results?.map((review, index) => (
                            <Tr key={review.id} bg={review.qualification <= 3 ? 'yellow.400' : null} >
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
        </Flex>
    )
}

export default ReviewAdmin