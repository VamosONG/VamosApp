import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, AddIcon, WarningIcon, EditIcon } from '@chakra-ui/icons'
import { BsAlarm, BsCalendar3, BsCursorFill, BsFillGeoFill, BsPersonFill, BsCurrencyDollar, BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
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
    Button,
    SimpleGrid,
    Text,
    Divider, Avatar, Tooltip, Badge, 
} from '@chakra-ui/react';
import NavBar from '../navBar/NavBar';
import { useSelector } from 'react-redux'

import Swal from "sweetalert2";
import CardUserTrips from '../cardUserTrips/cardUserTrips';
import UpdateUserDataForm from './updateUserDataForms';
import CardTrips from '../cards/cardTrips';

const UserProfile = () => {
    const location = useLocation();
    const userDetail = useSelector((state) => state.currentUser)
    // Función para manejar la actualización de información

    const initialFotoPerfil = localStorage.getItem('fotoPerfil') || '';
    const [fotoPerfil, setFotoPerfil] = useState(initialFotoPerfil)


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
    const bgImg ='https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg'

    return (
        <Box h='90vh' marginTop={'100px'} display={'flex'} justifyContent={'center'} alignContent={'center'} bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg"
        justify="center"
        bgSize="cover"
        bgRepeat="no-repeat">
            {location.pathname !== '/profile' && <NavBar />}
            <Flex  h={'60%'} w='80%' m='auto' justify={'space-evenly'} align={'center'} overflow={'hidden'} borderLeftRadius={10} borderRightRadius={10}>
                <Flex  h='100%' w='50%' >
                    <Flex bg={'gray.200'} flexDirection={'row'} align={'center'} justify={'start'} w={'100%'} p='1rem' gap={4} position={'relative'} >
                        {userDetail && userDetail ? (
                            <>
                                <Tooltip label='Editar datos' placement='left' bg='#10447E' borderRadius={4}>
                                    <Button w='1rem' h='1rem' position={'absolute'} bottom={'2.3rem'} right={'1rem'}>
                                        <UpdateUserDataForm  userDetail={userDetail} />
                                    </Button>
                                </Tooltip>
                                <Flex w={'50%'} justify={'center'} position={'relative'}>
                                    <Image  w={'15rem'} h={'15rem'} name='Segun Adebayo' src={fotoPerfil ? fotoPerfil : 'https://bit.ly/sage-adebayo'} border={'2px solid #10447E'}
                                        alt={fotoPerfil.name}
                                        bg='white'
                                        borderRadius={10}
                                    />{' '}
                                    <Tooltip label='Cambiar Foto' placement='left' bg='#10447E' borderRadius={4} >
                                        <Button position={'absolute'} bottom={0} right={'1rem'} w='2.3rem' h='2.3rem' onClick={changeImgPerfil}>
                                            <EditIcon />
                                        </Button>
                                    </Tooltip>
                                </Flex>
                                <Flex flexDirection={'column'} w={'50%'} gap={4} bg='#10447E' p='2' borderRadius={4} >
                                    <Flex w={'100%'} justify={'space-evenly'} gap={4} flexDirection={'column'}  >
                                        <Text fontSize={'1.7rem'} color={'white'}>
                                            Bienvenido {userDetail.name}
                                        </Text>
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4' >
                                            <Text textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                {userDetail.name}
                                            </Text>

                                        </Flex>
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4' >
                                            <Text textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                {userDetail.surname}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Flex w={'100%'} justify={'space-evenly'} gap={4} flexDirection={'column'} >
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4'>
                                            <Text textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                {userDetail.email}
                                            </Text>
                                        </Flex>
                                        <Flex w={'100%'} bg='whitesmoke' justifyContent={'space-between'} align={'center'} borderRadius={'4'} pl='4'>
                                            <Text textAlign={'left'} h='2rem' alignItems={'center'} display={'flex'}>
                                                {userDetail.dni ? userDetail.dni : 'DNI, no registrado'}
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
                    </Flex>
                </Flex>
                <Flex h='100%' w='50%' flexDirection={'row'} align={'center'} justify={'center'} bg={'gray.200'} pr='1'>
                    <Flex h={'100%'} w={'50%'} >
                        <Flex w={'100%'} h='100%' flexDirection={'column'}>
                            <Text>Ultimos viajes</Text>
                            <Tabs isFitted variant='enclosed' overflowY={'scroll'} css={scrollbarStyles}>
                                <TabList mb='1em'>
                                    <Tab>Reservados</Tab>
                                    <Tab>Completos</Tab>
                                </TabList>
                                <TabPanels >
                                    <TabPanel  p='0'>
                                        <CardUserTrips userDetail={userDetail} stateFilter='reserved' />
                                    </TabPanel>
                                    <TabPanel  p='0'>
                                        <CardUserTrips userDetail={userDetail} stateFilter='completed' />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>

                        </Flex>
                    </Flex>
                    <Flex h={'100%'}  w={'50%'} p={'1rem'}  overflowY={'scroll'} css={scrollbarStyles} flexDirection={'column'}  align={'center'} position={'relative'}>
                        <Flex flexDirection={'column'} gap={4} >

                        <Text position={'relative'} zIndex={99} textAlign={'center'} h={'fit-content'} >Nuevo Viaje</Text>
                        <CardTrips/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default UserProfile;
