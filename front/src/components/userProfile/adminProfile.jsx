import { Box, Flex, } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { getAllConductores, getAllPrices, getCanceledTrips, getDetailUserById, getPendingTrips, getReservedTrips } from '../../redux/actions';
import { StarIcon, EditIcon } from '@chakra-ui/icons';
import { BsBoxArrowInDownLeft, BsBoxArrowDownRight, BsFillPersonFill, } from "react-icons/bs";
import axios from 'axios';
import { useParams } from "react-router-dom";
import ImgMancora from '../../assets/imgPlaces/mancora.jpeg'
import ImgZorrito from '../../assets/imgPlaces/zorritos.jpg'
import ImgDecameron from '../../assets/imgPlaces/decameron.jpg'
import DriverDetail from '../../views/driversViewAdmin/DetailDriver/driverDetail';
import DriverTableView from '../../views/driversViewAdmin/driverTable';
import UserViewAdmin from '../../views/adminProfile/userViewAdmin';
import ReviewAdmin from '../../views/adminProfile/reviewAdmin';
import SolicitudesDeViajes from '../solicitudes/solicitudesDeViajes';

const AdminProfile = () => {
    // const { id } = useParams();
    // const dispatch = useDispatch();
    // const dataDrivers = useSelector((state) => state.conductores)
    // const viajesReservados = useSelector((state) => state.viajesReservados)
    // const viajesPendientes = useSelector((state) => state.viajesPendientes)
    // const viajesCompletados = useSelector((state) => state.viajesCompletados)
    // const dataPrices = useSelector((state) => state.allPrices)
    // console.log(dataPrices);
    // const users = useSelector((state) => state.newUsuario)
    // const [reviews, setReviews] = useState([])
    // // const [users, setUsers] = useState([])

    // const scrollbarStyles = {
    //     '&::-webkit-scrollbar': {
    //       width: '8px',
    //       height: '4px',
    //     },
    //     '&::-webkit-scrollbar-thumb': {
    //       backgroundColor: 'white',
    //       borderRadius: '1rem',
    //     },
    //     '&::-webkit-scrollbar-track': {
    //       backgroundColor: '#10447E',
    //       borderRadius: '1rem',
    //     },
    //   };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             await dispatch(getAllConductores())
    //             await dispatch(getReservedTrips())
    //             await dispatch(getPendingTrips())
    //             await dispatch(getCanceledTrips())
    //             await dispatch(getDetailUserById(id))
    //             await dispatch(getAllPrices())
    //             const response = await axios('http://localhost:3001/reviews');
    //             setReviews(response.data);
    //             // const res = await axios('http://localhost:3001/user');
    //             // setUsers(res.data);
    //         } catch (error) {
    //             console.error('Error en la solicitud de reviews', error);
    //         }
    //     };

    //     fetchData();
    // }, [id])

    return (
        <>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Conductores</Tab>
                    <Tab>Usuario</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>Reservas</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <DriverTableView/>
                    </TabPanel>
                    <TabPanel>
                        <UserViewAdmin/>
                    </TabPanel>
                    <TabPanel>
                        <ReviewAdmin/>
                    </TabPanel>
                    <TabPanel>
                        <SolicitudesDeViajes/>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </>
    )
}

export default AdminProfile;