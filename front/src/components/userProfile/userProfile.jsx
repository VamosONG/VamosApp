import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, AddIcon, WarningIcon, EditIcon } from '@chakra-ui/icons'
import { BsAlarm, BsCalendar3, BsCursorFill, BsGeoAltFill, BsPersonFill, BsCurrencyDollar, BsChevronDoubleRight, BsChevronDoubleLeft,BsGlobeAmericas } from "react-icons/bs";
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
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import CardUserTrips from '../cardUserTrips/cardUserTrips';
import UpdateUserDataForm from './updateUserDataForms';
import CardTrips from '../cards/cardTrips';
import CeroViaje from '../errorViews/ceroViaje/ceroviajes';

const UserProfile = () => {
    const dispatch = useDispatch()
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
        <Box h='90vh' w={{base:'100%', md: 'auto'}} marginTop={{base: '0', md: '80px'}} display={'flex'} justifyContent={'center'} alignContent={'center'} bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg"
        justify="center"
        bgSize="cover"
        bgRepeat="no-repeat" >
         
            <Flex h={{base: '600px', md: '60%'}} w={{base: '90%', md: '80%'}} m='auto' justify={'space-evenly'} align={'center'} overflow={'hidden'} borderLeftRadius={10} borderRightRadius={10} marginTop='5rem' position={'relative'}>
                <Flex h='100%' w={{base: '100%', md: '50%'}} position={'relative'}>
                    <Flex bg={'gray.200'} flexDirection={{base: 'column', md: 'row'}} align={'center'} justify={'start'} w={'100%'} p='1rem' gap={4} position={'relative'} borderRadius={8}>
                        {userDetail && userDetail ? (
                            <>
                                <Tooltip label='Editar datos' placement='left' bg='#10447E' borderRadius={4}>
                                    <Button w='1rem' h='1rem' position={'absolute'} bottom={'1.5rem'} right={'.5rem'}>
                                        <UpdateUserDataForm userDetail={userDetail} />
                                    </Button>
                                </Tooltip>
                                <Flex w={{base: '100%', md: '50%'}} justify={'center'} position={'relative'}>
                                    <Image w={{base: '100%', md: '15rem'}} h={{base: '300px', md: '15rem'}}name='Segun Adebayo' src={fotoPerfil ? fotoPerfil : 'https://bit.ly/sage-adebayo'} border={'2px solid #10447E'}

                                        alt={fotoPerfil.name}
                                        bg='white'
                                        borderRadius={10}
                                        objectFit={'cover'}
                                        loading='lazy'
                                    />{' '}
                                    <Tooltip label='Cambiar Foto' placement='left' bg='#10447E' borderRadius={4} >
                                        <Button position={'absolute'} bottom={0} right={'0rem'} w='2.3rem' h='2.3rem' onClick={changeImgPerfil} bg='#10447E' color={'white'}>
                                            <EditIcon />
                                        </Button>
                                    </Tooltip>
                                </Flex>
                                <Flex flexDirection={'column'} w={{base: '100%', md: '50%'}} gap={4} bg='#10447E' p='2' borderRadius={4}  >
                                    <Flex w={'100%'} justify={'space-evenly'} gap={4} flexDirection={'column'}  position={'relative'}>

                                    
                                        <Text fontSize={'1.7rem'} color={'white'}>
                                            ¡Bienvenido   {userDetail.name}!
                                        </Text>
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4' >
                                            <Text textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                Nombre: {userDetail.name}
                                            </Text>

                                        </Flex>
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4' >
                                            <Text textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                Apellido: {userDetail.surname}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Flex w={'100%'} justify={'space-evenly'} gap={4} flexDirection={'column'} >
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4'>
                                            
                                            <Text maxW={"120%"} textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                {userDetail.email}
                                            </Text>
                                        </Flex>
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4'>
                                            <Text textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                DNI: {userDetail.dni ? userDetail.dni : 'DNI, no registrado'}
                                            </Text>
                                    
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </>
                        ) : (
                            <>
                                <Text>Loading..</Text>
                            </>
                        )}
                        <Tooltip label='Viajes' placement='right' bg='#10447E' borderRadius={4}>

                        <Button mt={4} onClick={onOpen} position={'absolute'} left={'1rem'} top={'0'} bg='#10447E' color={'white'} >
                            <BsGlobeAmericas/>
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
                                            {userDetail.Trips.length  ? (
                                            <CardUserTrips userDetail={userDetail} stateFilter='reserved' />
                                            ):(
                                                <CeroViaje/>
                                            )}
                                        </TabPanel>
                                        <TabPanel p='0'>
                                            {userDetail.Trips.length  ? (
                                                <CardUserTrips userDetail={userDetail} stateFilter='completed' />
                                            ) : (
                                                <CeroViaje/>
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
            </Flex>
        </Box>
    );
};

export default UserProfile;
