import { Select, Box, Text, Flex, Heading, FormControl, FormLabel, Button,Input, Tooltip} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { airportFilter, alphabeticalOrder, carFilter, getAllConductores, passengerOrder, ratingOrder, stateFilter, stateOrder } from '../../../redux/actions'
import { BsAirplaneEngines, BsBootstrapReboot,BsArrowClockwise, BsFilterCircle, BsFunnel, BsSearch } from "react-icons/bs";
import { useState } from 'react';


const OrderFilterAlphabetical = ({searcher}) => {
    const data = useSelector((state) => state.allData)

    const dispatch = useDispatch({searcher})

    const handleOrderAlpha = (e) => {
        dispatch(alphabeticalOrder(e.target.value))
    }
    const handleOrderPassenger = (e) => {
        dispatch(passengerOrder(e.target.value))
    }

    //Cuando se agregren review lo activo
    // const handleOrderRating = (e) => {
    //     dispatch(ratingOrder(e.target.value))
    // }

    const handleFilterCar = (e) => {
        dispatch(carFilter(e.target.value))
    }

    const handleFilterAirport = (e) => {
        dispatch(airportFilter(e.target.value))
    }

    const handleFilterDriverState = (e) => {
        dispatch(stateFilter(e.target.value))
    }

    const handleOrderDriverState = (e) => {
        dispatch(stateOrder(e.target.value))
    }

    const resetFilter = ()=> {
        dispatch(getAllConductores())
    }

   

    const airportsFound = ["Aeropuerto Tumbes", "Aeropuerto Talara"];

    const carTypeFound = ["auto", "camioneta", "van", 'van plus'];

    return (
        <>
            <Flex gap='4' justify={'center'} align={'center'} mx='2rem' py='.5rem'>
                <Flex justify='center' align={'center'} gap='4'  >
                <Flex justify={'center'} align={'center'} fontSize={'1.5rem'}>
                    <Input placeholder='Buscar por nombre / auto / aeropuerto' onChange={searcher} border={'1px solid gray'} />
                </Flex >

                    <Tooltip label='Ordenar datos' bg='#10447E' placement='top' >
                        <Text fontSize={'2rem'}>
                            <BsFilterCircle/>
                        </Text>
                        </Tooltip> 
                    <Box>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Select
                                name='alphabetical'
                                onChange={handleOrderAlpha}>
                                <option value='A'>A - Z</option>
                                <option value='D'>Z - A</option>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl>
                            <FormLabel>Pasajeros</FormLabel>
                            <Select
                                name='passenfers'
                                onChange={handleOrderPassenger}>
                                <option value='A'>Mas</option>
                                <option value='D'>Menos</option>
                            </Select>
                        </FormControl>
                    </Box>
                    {/* <Box>
                        <FormControl>
                            <FormLabel>Estado</FormLabel>
                            <Select
                                name='driverState'
                                onChange={handleOrderDriverState}>
                                <option value='A'>Activo</option>
                                <option value='D'>Descanso</option>
                            </Select>
                        </FormControl>
                    </Box> */}

                    {/* //Cuando se agregren review lo activo */}
                    {/* <Box>
                    <Select placeholder='Puntuacion'
                        name='rating'
                        onChange={handleOrderRating}>
                        <option value='A'>➕ - ➖</option>
                        <option value='D'>➖ - ➕</option>
                    </Select>
                </Box> */}
                </Flex>

                <Flex justify='center' align={'center'} gap='4'  >
                        <Tooltip label='Filtrar datos' bg='#10447E' placement='top' >
                        <Text fontSize={'2rem'}>
                            <BsFunnel/>
                        </Text>
                        </Tooltip> 
                    <Box>
                        <FormControl>
                            <FormLabel>Vehiculo</FormLabel>
                            <Select
                                name='cartype'
                                onChange={handleFilterCar}>
                                {carTypeFound.map((car, index) => (
                                    <option key={index} value={car}>{car}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl >
                            <FormLabel > Zona </FormLabel>
                            <Select
                                name='airpots'
                                onChange={handleFilterAirport}
                                // onChange={handleFilterCar}
                                >
                                {airportsFound.map((airports, index) => (
                                    <option key={index} value={airports} >{airports}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl>
                            <FormLabel>Estado</FormLabel>
                            <Select
                                name='driverState'
                                onChange={handleFilterDriverState}
                                // onChange={handleFilterCar}
                                >
                                <option value={'all'}>Todos</option>
                                <option value={true}>Activo</option>
                                <option value={false}>Descanso</option>
                                <option value={'D'}>Eliminados</option>
                            </Select>
                        </FormControl>
                    </Box>



                    {/* //Cuando se agregren review lo activo */}
                    {/* <Box>
                    <Select placeholder='Puntuacion'
                        name='rating'
                        onChange={handleOrderRating}>
                        <option value='A'>➕ - ➖</option>
                        <option value='D'>➖ - ➕</option>
                    </Select>
                </Box> */}
                </Flex>

                <Flex onClick={resetFilter} ><Button bg='blue.200' color='#000' fontSize='1.2rem' > <BsArrowClockwise/> </Button></Flex>
            </Flex>
        </>
    )
}

export default OrderFilterAlphabetical