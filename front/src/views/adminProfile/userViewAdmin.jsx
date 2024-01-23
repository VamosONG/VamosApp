import { useEffect, useState } from 'react';
import { StarIcon, EditIcon } from '@chakra-ui/icons';;
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
import { useDispatch, useSelector } from "react-redux";
import { getDataUser, getReviewsData } from '../../redux/actions';
import UserFilter from '../driversViewAdmin/filtersData/userFilter';
import Paginado from '../../components/paginado/paginadoComponent';

const UserViewAdmin = () => {
    const userData = useSelector((state) => state.dataUser)
    console.log('data en current user ' + userData);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataUser())
    }, [])

    return (
        <TableContainer  >
            <Flex bg='gray.200' color='#000' justify={'center'} >
                <UserFilter/>
            </Flex>
            <Flex px='1rem' >
                <Table variant='striped' colorScheme='gray.100' >
                    <TableCaption>Usuarios</TableCaption>
                    <Thead>
                        <Tr>
                            <Th >Usuario</Th>
                            <Th >E-mail</Th>
                            <Th>DNI</Th>
                            <Th>telefono</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {userData?.map((user, index) => (
                            <Tr key={user.id}  >
                                <Td w='auto' >{user.name}</Td>
                                <Td w='min-content' >
                                    <Tooltip hasArrow label={user.email ? 'Enviar Correo' : null} bg='#10447E' placement='top'>
                                        <Link href={`mailto:${user.email}`}>
                                            {user.email}
                                        </Link>
                                    </Tooltip>
                                </Td>
                                <Td w='auto' >{user.dni ? user.dni : 'Desconocido'}</Td>
                                <Td w='auto' display={'flex'} flexDirection={'column'}>
                                    <Tooltip hasArrow label={user.phone ? 'Contactar' : null} bg='#10447E' placement='top'>
                                        <Link href={`whatsapp://send?phone=+51${user.phone}`}>
                                            {user.phone ? user.phone : 'Numero desconocido'}
                                        </Link>
                                    </Tooltip>
                                </Td>
                            </Tr>
                        ))}

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th >Usuario</Th>
                            <Th >E-mail</Th>
                            <Th>DNI</Th>
                            <Th>telefono</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </Flex>
            {/* COMPONENTE DE PAGINADO */}
            {/* <Paginado/>  */}
        </TableContainer>
    )
}

export default UserViewAdmin;