import { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Tooltip,
    TableContainer, Button, Flex, Link,
} from '@chakra-ui/react'
import { RepeatClockIcon, AddIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { getDataUser, handleAdminUser, } from '../../redux/actions';
import UserFilter from '../driversViewAdmin/filtersData/userFilter';
import Paginado from '../../components/paginado/paginadoComponent';
import Swal from 'sweetalert2'

const UserViewAdmin = () => {
    const userData = useSelector((state) => state.dataUser)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? userData : userData.filter((data) => data.name && data.name.toLowerCase().includes(search.toLowerCase()) || data.email && data.email.toLowerCase().includes(search.toLowerCase())
    )


    console.log(results);
    const handleAdminAccess = (id) => {
        Swal.fire({
            title: "¿Convertir ADMIN?",
            text: "SE LE DARA PERMISO A TODOS LOS DATOS DEL SISTEMA",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, convertir!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await dispatch(handleAdminUser(id))
                if (response) {
                    Swal.fire({
                        title: "¡Acceso ADMIN!",
                        text: "El usuario ahora puede ingresar como ADMIN.",
                        icon: "success"
                    });
                }
                await dispatch(getDataUser())

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    title: "Cancelado",
                    text: "Registro sin modificar",
                    icon: "error"
                });
            }
        });
    }

    useEffect(() => {
        dispatch(getDataUser())
    }, [])

    return (
        <Flex /* align='center' direction={{base:'column',md:'row'}} */ alignItem='center' justifyContent='center'>

            <TableContainer  >
                <Flex bg='gray.200' color='#000' justify={'center'} >
                    <UserFilter searcher={searcher} />
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
                                <Th>Viajes</Th>
                                <Th>Acion</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {results?.map((user) => (
                                <Tr key={user.id}  >
                                    <Td w='auto' >{user.name ? user.name : 'sin nombre'}</Td>
                                    <Td w='min-content' >
                                        <Tooltip hasArrow label={user.email ? 'Enviar Correo' : null} bg='#10447E' placement='top'>
                                            <Link href={`mailto:${user.email}`}>
                                                {user.email ? user.email : 'Sin correo'}
                                            </Link>
                                        </Tooltip>
                                    </Td>
                                    <Td w='auto'>{user.dni ? user.dni : 'Desconocido'}</Td>
                                    <Td w='auto' display={'flex'} flexDirection={'column'}>
                                        <Tooltip hasArrow label={user.phone ? 'Contactar' : null} bg='#10447E' placement='top'>
                                            <Link href={`whatsapp://send?phone=+51${user.phone}`}>
                                                {user.phone ? user.phone : 'Numero desconocido'}
                                            </Link>
                                        </Tooltip>
                                    </Td>
                                    <Td w='auto'> {user.Trips.length ? user.Trips.length : '0'}
                                     </Td>
                                    <Td>
                                        {user.admin ? (
                                            <>
                                                <Tooltip label='Quitar Access Admin' placement='right' bg='#E83D6F'>
                                                    
                                                <Button onClick={() => handleAdminAccess(user.id)}
                                                    bg='#E83D6F'
                                                    fontSize='1.2rem'
                                                    id={user.id} >
                                                    <RepeatClockIcon />
                                                </Button>
                                                </Tooltip>
                                            </>
                                        ) : (
                                            <>
                                            <Tooltip label='Access Admin' placement='right' bg='#009ED1'>

                                                <Button onClick={() => handleAdminAccess(user.id)}
                                                    bg='#009ED1'
                                                    fontSize='1.2rem'
                                                    id={user.id} >
                                                    <AddIcon />
                                                </Button>
                                            </Tooltip>
                                            </>
                                        )}
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
                                <Th>Viajes</Th>
                                <Th>Acion</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </Flex>
                {/* COMPONENTE DE PAGINADO */}
                <Paginado />
            </TableContainer>
        </Flex>
    )
}

export default UserViewAdmin;