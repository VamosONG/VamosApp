import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, AddIcon, WarningIcon, EditIcon } from '@chakra-ui/icons'
import { BsAlarm, BsCalendar3, BsCursorFill, BsGeoAltFill, BsPersonFill, BsCurrencyDollar, BsChevronDoubleRight, BsChevronDoubleLeft, BsGlobeAmericas } from "react-icons/bs";
import {
    Box,
    Flex,
    Image,
    Heading,
    Link as ChakraLink,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    VStack,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Text,
    Divider, Button, Tooltip, Badge, useDisclosure
} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import NavBar from '../navBar/NavBar';
import { useSelector } from 'react-redux'

import Swal from "sweetalert2";
import CardUserTrips from '../cardUserTrips/cardUserTrips';
import UpdateUserDataForm from './updateUserDataForms';

import CardTrips from '../cards/cardTrips';

import CeroViaje from '../navBar/ceroViajes';

import { getDataUser } from '../../redux/actions';


const UserProfile = () => {
    const location = useLocation();
    const userDetail = useSelector((state) => state.currentUser)
    // Función para manejar la actualización de información

    const initialFotoPerfil = localStorage.getItem('fotoPerfil') || '';
    const [fotoPerfil, setFotoPerfil] = useState(initialFotoPerfil)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    useEffect(() => {
        // Guardar la foto de perfil en localStorage cada vez que cambie
        localStorage.setItem('fotoPerfil', fotoPerfil);
    }, [fotoPerfil]);

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

    const changeImgPerfil = async () => {
        const { value: file } = await Swal.fire({
            title: "Selecciona tu imagen",
            input: "file",
            inputAttributes: {
                "accept": "image/*",
                "aria-label": "Upload your profile picture"
            }
        });
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageNew = e.target.result;
                setFotoPerfil(imageNew)
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <Flex
      
        h="80vh"
        bg="rgba(5, 76, 132, 0.6)"
        flexDirection="column"
        borderRadius="20px"
        m="2%"
        mt={{ base: '69', md: '6', lg: '8' }}   
        p={{ base: '13', md: '6', lg: '8' }} // Padding responsive
    >
            <Text fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }} color="white">
                ¡Bienvenido   {userDetail.name}!
            </Text>
            <Flex
                flexDirection={{ base: 'column', md: 'row' }} // Alineación de columnas en dispositivos pequeños y filas en dispositivos medianos y grandes
                justify="space-between"
                alignItems="stretch"
                w="100%"
                p={{ base: '2', md: '4', lg: '6' }} // Padding responsive
                gap={{ base: '4', md: '8', lg: '12' }} // Espacio entre elementos responsive
            >


                {userDetail && userDetail ? (
                    <>

<Flex
                    flex={{ base: '1', md: '1', lg: '2' }} // Ocupa el 100% del espacio en dispositivos pequeños y medianos, 1/2 en dispositivos grandes
                    flexDirection="column"
                    alignItems={{ base: 'center', md: 'flex-start' }}
                    minW={"300px"} // Alineación al centro en dispositivos pequeños, al inicio en dispositivos medianos y grandes
                >
                    <Image
                        w={{ base: '200px', md: '250px', lg: '300px' }} // Ancho de imagen responsive
                        h={{ base: '200px', md: '250px', lg: '300px' }} // Altura de imagen responsive
                        src={fotoPerfil ? fotoPerfil : 'https://res.cloudinary.com/drgnsbah9/image/upload/v1706742586/PERFIL-VACIO_jt5irw.png'}
                        border="2px solid #10447E"
                        alt={fotoPerfil.name}
                        bg="white"
                        borderRadius="10px"
                        objectFit="cover"
                        loading="lazy"
                        minW={"200px"}
                    />{' '}
                            <Tooltip label="Cambiar Foto" placement="left" bg="#10447E" borderRadius={4}>
                        <Button
                            
                            onClick={changeImgPerfil}
                            bg="#10447E"
                            color="white"
                            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} // Tamaño de fuente responsive
                        >
                                    <EditIcon />
                                </Button>
                            </Tooltip>
                        </Flex>
                        <Flex flexDirection={'column'}
                            w={'100%'} gap={8} p='7'
                            borderRadius={4} 
                            >
                           <Flex
                    flex={{ base: '1', md: '2', lg: '3' }} // Ocupa el 100% del espacio en dispositivos pequeños, 2/3 en dispositivos medianos y 3/4 en dispositivos grandes
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="4"
                >



                                <Flex w={'100%'} bg='whitesmoke'
                                    justifyContent={'space-between'} align={'center'}
                                    borderRadius={'4'} pl='4' >
                                    <Text 
                                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                                    textAlign={'center'} h='5rem'
                                        alignItems={'center'} display={'flex'}
                                        >
                                        Nombre: {userDetail.name}
                                    </Text>

                                </Flex>
                                <Flex w={'100%'} bg='whitesmoke'
                                    justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4' >
                                    <Text textAlign={'left'} h='5rem'
                                        alignItems={'center'} display={'flex'}
                                        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                                        Apellido: {userDetail.surname}
                                    </Text>
                                </Flex>

                                <Flex w={'100%'} justify={'space-evenly'}
                                    gap={4} flexDirection={'column'} >
                                    <Flex w={'100%'} bg='whitesmoke'
                                        justifyContent={'space-between'} align={'center'}
                                        borderRadius={'4'} pl='4'>

                                        <Text maxW={"120%"} textAlign={'left'} h='5rem'
                                            alignItems={'center'} display={'flex'}
                                            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                                            Email:  {userDetail.email}
                                        </Text>
                                    </Flex>
                                    <Flex w={'100%'} bg='whitesmoke'
                                        justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4'>
                                        <Text textAlign={'left'} h='5rem'
                                            alignItems={'center'} display={'flex'}
                                            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                                            DNI: {userDetail.dni ? userDetail.dni : 'DNI, no registrado'}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Tooltip  placement="left" bg='#10447E' borderRadius={4}>
                               
                                
                                    <UpdateUserDataForm userDetail={userDetail} />
                               
                            </Tooltip>
                        </Flex>
                    </>
                ) : (
                    <>
                        <Text>Loading..</Text>
                    </>
                )}
                <Tooltip  placement='right' bg='#10447E' borderRadius={4}>

                <Button
                    mt={{ base: '4', md: '8', lg: '12' }} // Margen superior responsive
                    onClick={onOpen}
                    width={{ base: '100%', md: '50%', lg: '25rem' }} // Ancho del botón responsive
                    bg="#10447E"
                    color="white"
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} // Tamaño de fuente responsive
                >
                        Viajes 
                    </Button>
                </Tooltip>


                <Flex flexDirection={'row'} align={'center'} justify={'center'} bg={'gray.200'} pr='1'>
                    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}  >
                        <ModalOverlay />
                        <ModalContent h={'70vh'} overflow={'hidden'}>
                            <ModalHeader>Ultimos viajes</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody overflowY={'scroll'} css={scrollbarStyles}>
                                <Flex w={'100%'} h='auto' flexDirection={'column'} >
                                    <Tabs isFitted variant='enclosed' >
                                        <TabList mb='1em'>
                                            <Tab>Reservados</Tab>
                                            <Tab>Completos</Tab>
                                        </TabList>
                                        <TabPanels >
                                            <TabPanel p='0'>
                                                {userDetail.Trips.length ? (
                                                    <CardUserTrips userDetail={userDetail} stateFilter='reserved' />
                                                ) : (
                                                    <CeroViaje />
                                                )}
                                            </TabPanel>
                                            <TabPanel p='0'>
                                                {userDetail.Trips.length ? (
                                                    <CardUserTrips userDetail={userDetail} stateFilter='completed' />
                                                ) : (
                                                    <CeroViaje />
                                                )}
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>

                                </Flex>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='red' mr={3} onClick={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </Flex>
            </Flex>
        </Flex>
    );
};

export default UserProfile;
