import { alphabeticalOrder, getDataUser, orderListTrips, ratingOrder, stateFilter } from "../../../redux/actions";
import { useSelector, useDispatch } from 'react-redux'
import { Select, Box, Text, Flex, Heading, FormControl, FormLabel, Button, Tooltip, Input } from '@chakra-ui/react'
import { BsAirplaneEngines, BsBootstrapReboot, BsArrowClockwise, BsFilterCircle, BsFunnel } from "react-icons/bs";


const UserFilter = ({ searcher }) => {
    const dispatch = useDispatch()
    const resetFilter = () => {
        dispatch(getDataUser())
    }

    const handleAlpha = (e) => {
        dispatch(alphabeticalOrder(e.target.value))
    }
    const handleFilterAdmin = (e) => {
        dispatch(stateFilter(e.target.value))
    }

    const handleTrips = (e) => {
        dispatch(orderListTrips(e.target.value))
    }
    return (
        <>
            <Flex gap='4' justify={'center'} align={'center'} mx='2rem' py='.5rem'>
                <Flex justify='center' align={'center'} gap='4'  >
                    <Flex justify={'center'} align={'center'} fontSize={'1.5rem'}>
                        <Input placeholder='Buscar por nombre / correo' onChange={searcher} border={'1px solid gray'} />
                    </Flex >
                    <Tooltip label='Ordenar datos' bg='#10447E' placement='top' >
                        <Text fontSize={'2rem'}>
                            <BsFilterCircle />
                        </Text>
                    </Tooltip>
                    <Box>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Select
                                name='alphabetical'
                                onChange={handleAlpha}>
                                <option value='UA'>A - Z</option>
                                <option value='UD'>Z - A</option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>Viajes</FormLabel>
                            <Select
                                name='trips'
                                onChange={handleTrips}>
                                <option value='vjsA'>Mas</option>
                                <option value='vjsD'>Menos</option>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* //Cuando se agregren review lo activo */}
                    {/* <Box>
                <FormControl>
                        <FormLabel>Puntuacion</FormLabel>
                <Select 
                    name='rating'
                    onChange={handleRating}>
                    <option value='A'>Alta</option>
                    <option value='D'>Baja</option>
                </Select>
                </FormControl>
            </Box> */}
                </Flex>

                <Flex justify='center' align={'center'} gap='4'  >
                    <Tooltip label='Filtrar datos' bg='#10447E' placement='top' >
                        <Text fontSize={'2rem'}>
                            <BsFunnel />
                        </Text>
                    </Tooltip>
                    <Box>
                        <FormControl>
                            <FormLabel>Admin</FormLabel>
                            <Select
                                name='state'
                                onChange={handleFilterAdmin}
                            >
                                <option value='allUser'>Todos</option>
                                <option value='Admin'>Admin</option>
                                <option value='User'>Usuarios</option>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* <Box>
                    <FormControl >
                        <FormLabel > Zona </FormLabel>
                        <Select
                            name='airpots'
                            onChange={handleFilterAirport}>
                            {airportsFound.map((airports, index) => (
                                <option key={index} value={airports} >{airports}</option>
                            ))}
                        </Select>
                    </FormControl>
                </Box> */}

                    {/* <Box>
                    <FormControl>
                        <FormLabel>Estado</FormLabel>
                        <Select
                            name='driverState'
                            onChange={handleFilterDriverState}>
                            <option value={'all'}>Todos</option>
                            <option value={true}>Activo</option>
                            <option value={false}>Descanso</option>
                            <option value={'D'}>Eliminados</option>
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
            </Box>  */}
                </Flex>


                <Flex onClick={resetFilter} ><Button bg='blue.200' color='#000' fontSize='1.2rem' > <BsArrowClockwise /> </Button></Flex>
            </Flex>
        </>
    )
}

export default UserFilter;