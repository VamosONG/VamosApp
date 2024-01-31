import { useEffect, useState } from 'react';
import {

  Table, Box,

  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption, Tooltip,
  TableContainer, Button, Flex, Link,Input
} from '@chakra-ui/react'
import { RepeatClockIcon, AddIcon, WarningTwoIcon, UnlockIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { getDataUser, handleAdminUser, } from '../../redux/actions';
import UserFilter from '../driversViewAdmin/filtersData/userFilter';
// import Paginado from '../../components/paginado/paginadoComponent';
import Swal from 'sweetalert2'
import axios from 'axios';

const UserViewAdmin = () => {
  const userData = useSelector((state) => state.dataUser)
  const dispatch = useDispatch()
  

  

  // const results = !search ? userData : userData.filter((data) => data.name && data.name.toLowerCase().includes(search.toLowerCase()) || data.email && data.email.toLowerCase().includes(search.toLowerCase())
  // )


 
  const handleAdminAccess = (id) => {
    Swal.fire({
      title: "¿Dar permisos de ADMIN?",
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
            title: "¡Ha añadido un nuevo ADMINISTRADOR!",
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

  const handleUnAdminAccess = (id) => {
    Swal.fire({
      title: "¿Quitar permisos de ADMIN?",
      text: "SE LE QUITARAN LOS PERMISOS AL USUARIO",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, quitar permisos!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await dispatch(handleAdminUser(id));
        if (response) {
          Swal.fire({
            title: "¡Administrador degradado a usuario normal!",
            text: "El usuario ya no podra acceder al panel de administrador",
            icon: "success"
          });
        }
        await dispatch(getDataUser());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelado",
          text: "No se ha modificado el Administrador",
          icon: "error"
        });
      }
    });
  };
  const handleBanned = (id) => {
    Swal.fire({
      title: "¿Seguro quieres banear a este usuario?",
      text: "El usuario no podra volver acceder a la pagina",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, banealo!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.patch(`http://localhost:3001/user/logic/${id}`)
        if (response) {
          Swal.fire({
            title: "¡Usuario baneado!",
            text: "Puedes deshacer esta accion desde el panel de usuarios",
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
          text: "No se ha baneado al usuario",
          icon: "error"
        });
      }
    });
  }
  const handleUnbanned = (id) => {
    Swal.fire({
      title: "¡Vas a desbanear a este usuario!",
      text: "El usuario podra volver acceder a la pagina",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, desbanealo!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.patch(`http://localhost:3001/user/logic/${id}`)
        if (response) {
          Swal.fire({
            title: "¡Usuario desbaneado!",
            text: "Puedes volver a banearlo cuando lo desees",
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
          text: "No se ha desbaneado al usuario",
          icon: "error"
        });
      }
    });
  }

  useEffect(() => {
    dispatch(getDataUser())
  }, [])

  //***************PAGINADO**********************************/
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [tripsToShow, setTripsToShow] = useState([]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 1) return;

    const firstCompleted = (prevPage - 1) * 6;

    setCurrentPage(prevPage);
    setTripsToShow([...userData].splice(firstCompleted, 6));
  };

  const nextHandler = () => {
    const totalCompleted = userData.length;

    const nextPage = currentPage + 1;

    const firstCompleted = currentPage * 6;

    if (firstCompleted >= totalCompleted) return;
    setCurrentPage(nextPage);
    setTripsToShow([...userData].splice(firstCompleted, 6));
  };

  // useEffect(() => {
  //   dispatch(getCanceledTrips());
  // }, [dispatch]);

  useEffect(() => {
    setTripsToShow([...userData].splice(0, 6));
  }, [userData]);

  //***************BUSQUEDA Y ORDENAMIENTO**********************************/
  // const [input, setInput] = useState({
  //   searchInput: "",
  //   order: ""
  // });

  // const handleChange = async (e) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleClean = async (e) => {
  //   setInput({
  //       ...input,
  //       searchInput: "",
  //       order: "",
  //   })
  //   dispatch(orderSearch({
  //     ...input,
  //     searchInput: "",
  //     order: "",

  // }));
  // }

  // const handleSubmit = async (e) => {
  //   dispatch(orderSearch(input));
  //   setCurrentPage(1);
  // };
  
  return (
    <Box>
      <Flex
        display="block"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        bgColor='#009ED1'
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        border="1px solid black"
      >


        <TableContainer>
          <Flex
            bg='#009ED1'
            justify={'center'}
            p={2}
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
          >
            <UserFilter  />
        
          </Flex>
          <Flex px={0} bg="gray.300" overflowX="auto" borderBottomLeftRadius="md" borderBottomRightRadius="md">
            <Table variant="simple">

              <Thead>
                <Tr>
                  <Th border="2px solid black" minWidth="300px">Usuario</Th>
                  <Th border="2px solid black" minWidth="300px">E-mail</Th>
                  <Th border="2px solid black" minWidth="260px">DNI</Th>
                  <Th border="2px solid black" minWidth="260px">Teléfono</Th>
                  <Th border="2px solid black">Viajes</Th>
                  <Th border="2px solid black">Acción</Th>
                </Tr>
              </Thead>


              <Tbody>
                {tripsToShow?.map((user) => (
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
                    <Td border="2px solid black" >
                      <Flex gap={2} justifyContent={'center'} >
                        {user.admin ? (
                          <>
                            <Tooltip label="Quitar Acceso Admin" placement="right" bg="#E83D6F">
                              <Button onClick={() => handleUnAdminAccess(user.id)} bg="red.300" fontSize="1.2rem" id={user.id}>
                                <RepeatClockIcon />
                              </Button>
                            </Tooltip>
                            {user.banned !== true ? (
                              <Tooltip label="Bannear / Bloquear" placement="right" bg="#E83D6F">
                                <Button onClick={() => handleBanned(user.id)} bg="#E83D6F" fontSize="1.2rem" id={user.id}>
                                  <WarningTwoIcon />
                                </Button>
                              </Tooltip>
                            ) : (
                              <Tooltip label="Desbloquear" placement="right" bg="#10447E">
                                <Button onClick={() => handleBanned(user.id)} bg={'#10447E'} fontSize="1.2rem" id={user.id}>
                                  <UnlockIcon />
                                </Button>
                              </Tooltip>
                            )}
                          </>
                        ) : (
                          <>
                            <Tooltip label="Acceso Admin" placement="right" bg="#009ED1">
                              <Button onClick={() => handleAdminAccess(user.id)} bg="blue.300" fontSize="1.2rem" id={user.id}>
                                <AddIcon />
                              </Button>
                            </Tooltip>
                            {user.banned !== true ? (
                              <Tooltip label="Bannear / Bloquear" placement="right" bg="#E83D6F">
                                <Button onClick={() => handleBanned(user.id)} bg="#E83D6F" fontSize="1.2rem" id={user.id}>
                                  <WarningTwoIcon />
                                </Button>
                              </Tooltip>
                            ) : (
                              <Tooltip label="Desbloquear" placement="right" bg="#10447E">
                                <Button onClick={() => handleUnbanned(user.id)} bg={'#10447E'} fontSize="1.2rem" id={user.id} color={'white'}>
                                  <UnlockIcon />
                                </Button>
                              </Tooltip>
                            )}
                          </>
                        )}
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>

            </Table>

          </Flex>

        </TableContainer>
        <Flex
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          bgColor="gray.300"
          w="100%"
          h="100%"
          borderBottomLeftRadius="md"
          borderBottomRightRadius="md"
          border="1px solid black"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="1rem"
            marginBottom="1rem"
          >
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
        </Flex>
      </Flex>

    </Box>
  );
}


export default UserViewAdmin;