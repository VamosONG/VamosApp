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
// import Paginado from '../../components/paginado/paginadoComponent';
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
        const response = await dispatch(handleAdminUser(id));
        if (response) {
          Swal.fire({
            title: "¡Acceso ADMIN!",
            text: "El usuario ahora puede ingresar como ADMIN.",
            icon: "success"
          });
        }
        await dispatch(getDataUser());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelado",
          text: "Registro sin modificar",
          icon: "error"
        });
      }
    }); 
  }; 
    

    useEffect(() => {
        dispatch(getDataUser())
    }, [])

    return (

        <Flex 
        direction="column"
        width="100%"
        overflowX="auto" 
        mt={4}
        align="center"
        justify="center"
        >

        <Flex>
          <TableContainer>
            <Flex 
            bg='#009ED1' 
            justify={'center'} 
            p={2}
            borderTopLeftRadius="md" 
            borderTopRightRadius="md"
            >
            <UserFilter searcher={searcher}/>
            </Flex>
            <Flex px={0} bg="gray.300" overflowX="auto" borderBottomLeftRadius="md" borderBottomRightRadius="md">
              <Table variant="simple">
                <TableCaption TableCaption>Usuarios</TableCaption>
                <Thead>
                  <Tr>
                    <Th border="2px solid black">Usuario</Th>
                    <Th border="2px solid black">E-mail</Th>
                    <Th border="2px solid black">DNI</Th>
                    <Th border="2px solid black">Teléfono</Th>
                    <Th border="2px solid black">Viajes</Th>
                    <Th border="2px solid black">Acción</Th>
                  </Tr>
                </Thead>

  
                <Tbody>
                {results?.map((user) => (
                  <Tr key={user.id}>
                    <Td border="2px solid black">{user.name ? user.name : 'sin nombre'}</Td>
                    <Td border="2px solid black">
                      <Tooltip hasArrow label={user.email ? 'Enviar Correo' : null} bg="#10447E" placement="top">
                        <Link href={`mailto:${user.email}`}>{user.email ? user.email : 'Sin correo'}</Link>
                      </Tooltip>
                    </Td>
                    <Td border="2px solid black">{user.dni ? user.dni : 'Desconocido'}</Td>
                    <Td border="2px solid black">
                      <Tooltip hasArrow label={user.phone ? 'Contactar' : null} bg="#10447E" placement="top">
                        <Link href={`whatsapp://send?phone=+51${user.phone}`}>
                          {user.phone ? user.phone : 'Numero desconocido'}
                        </Link>
                      </Tooltip>
                    </Td>
                    <Td border="2px solid black">{user.Trips.length ? user.Trips.length : '0'}</Td>
                    <Td border="2px solid black">
                      {user.admin ? (
                      <Tooltip label="Quitar Acceso Admin" placement="right" bg="#E83D6F">
                        <Button onClick={() => handleAdminAccess(user.id)} bg="red.300" fontSize="1.2rem" id={user.id}>
                          <RepeatClockIcon />
                        </Button>
                      </Tooltip>
                      ) : (
                      <Tooltip label="Acceso Admin" placement="right" bg="#009ED1">
                        <Button onClick={() => handleAdminAccess(user.id)} bg="blue.300" fontSize="1.2rem" id={user.id}>
                          <AddIcon />
                        </Button>
                      </Tooltip>

                    )}
                    </Td>
                    </Tr>
                    ))}
                </Tbody>
              </Table>
        </Flex>
        {/* COMPONENTE DE PAGINADO */}
        {/* <Paginado /> */}
        </TableContainer>
      </Flex>
    </Flex>
  );
}
  

export default UserViewAdmin;