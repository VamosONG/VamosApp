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
import Pagination from '../../components/paginado/paginadoComponent';
// import Paginado from '../../components/paginado/paginadoComponent';


const ReviewAdmin = () => {

    const reviews = useSelector((state) => state.reviewsData)
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? reviews : reviews.filter((data) => data.userName && data.userName.toLowerCase().includes(search.toLowerCase()) || data.userMail && data.userMail.toLowerCase().includes(search.toLowerCase()) || data.driverName && data.driverName.toLowerCase().includes(search.toLowerCase())
    )

    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);
    const [review, setReview] = useState([]);

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 1) return;

        const firstReserved = (prevPage - 1) * itemsPerPage;

        setCurrentPage(prevPage);
        setReview([...reviews].splice(firstReserved, itemsPerPage))
    }

    const nextHandler = () => {
        const totalReviews = reviews.length;

        const nextPage = currentPage + 1;

        const firstReserved = currentPage * itemsPerPage;

        if (firstReserved > totalReviews) return;
        setCurrentPage(nextPage);
        setReview([...reviews].splice(firstReserved, itemsPerPage))
    }

    useEffect(() => {
        dispatch(getReviewsData())
    }, [])

    return (
        <Flex
            aalignItems='center'
            justifyContent='center'
            direction="column"
            width="100%"
            overflowX="auto"
        >
            <TableContainer >
                <Flex bg='#009ED1' justify={'center'} p={2} borderTopLeftRadius="md" borderTopRightRadius="md" border="1px solid black">
                    <ReviewFilter searcher={searcher} />
                </Flex>
                <Flex px={0} bg='gray.300' overflowX="auto" borderBottomLeftRadius="md" borderBottomRightRadius="md" border="1px solid black">
                    <Table variant='striped' colorScheme='gray.100' >
                        <TableCaption border="1px solid black">Reviews</TableCaption>
                        <Thead>
                            <Tr>
                                <Th border="2px solid black">Usuario</Th>
                                <Th border="2px solid black">E-mail</Th>
                                <Th border="2px solid black">Fecha</Th>
                                <Th border="2px solid black">comentario</Th>
                                <Th border="2px solid black">chofer</Th>
                                <Th border="2px solid black">Calificacion</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {results?.map((review, index) => (
                                <Tr key={review.id} bg={review.qualification <= 3 ? 'blue.200' : null} >
                                    <Td border="2px solid black" w='auto' >{review.userName ? review.userName : 'User Test'}</Td>
                                    <Td border="2px solid black" w='min-content' >
                                        <Tooltip hasArrow label={review.userMail !== 'Email bloqueado' ? 'Enviar Correo' : null} bg='#10447E' placement='top'>
                                            <Link href={`mailto:${review.userMail}`}>
                                                {review.userMail} <EmailIcon />
                                            </Link>
                                        </Tooltip>
                                    </Td>
                                    <Td border="2px solid black" w='auto' >{review.date}</Td>
                                    <Td border="2px solid black" w='auto' >{review.comments}</Td>
                                    <Td border="1px solid black" w='auto' display={'flex'} flexDirection={'column'}>
                                        <Badge variant='solid' colorScheme='green' w='max-content'>
                                            {review.driverName}
                                        </Badge>

                                        <Tooltip hasArrow label={review.driverPhone !== 'Numero oculto' ? 'Contactar' : null} bg='#10447E' placement='top'>
                                            <Link href={`whatsapp://send?phone=+51${review.driverPhone}`} >
                                                {review.driverPhone} <ChatIcon />
                                            </Link>
                                        </Tooltip>
                                    </Td>

                                    <Td border="2px solid black" w='auto' >  {Array(5)
                                        .fill('')
                                        .map((_, i) => (
                                            <StarIcon key={i} color={i < review.qualification ? '#E83D6F' : 'gray.300'} />
                                        ))} </Td>
                                </Tr>
                            ))}

                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th border="2px solid black">Usuario</Th>
                                <Th border="2px solid black">E-mail</Th>
                                <Th border="2px solid black">Fecha</Th>
                                <Th border="2px solid black">comentario</Th>
                                <Th border="2px solid black">chofer</Th>
                                <Th border="2px solid black">Calificacion</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </Flex> 
                {reviews.length > 6 ? (
                    <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
                        <Button
                            color='black'
                            bgColor='#009ED1'
                            variant="outline"
                            colorScheme="teal"
                            onClick={prevHandler}
                        >
                            Anterior
                        </Button>

                        <Box as="span" marginLeft="1rem" marginRight="1rem">
                            Página {currentPage}
                        </Box>

                        <Button
                            color='black'
                            bgColor='#009ED1'
                            variant="outline"
                            colorScheme="teal"
                            onClick={nextHandler}
                        >
                            Siguiente
                        </Button>
                    </Box>
                ) : (
                    null
                )}
                {/* COMPONENTE DE PAGINADO */}
            </TableContainer>
        </Flex>
    )
}

export default ReviewAdmin