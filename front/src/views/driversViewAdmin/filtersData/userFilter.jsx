import { alphabeticalOrder, getDataUser } from "../../../redux/actions";
import { useSelector, useDispatch } from 'react-redux'
import { Select, Box, Text, Flex, Heading, FormControl, FormLabel, Button} from '@chakra-ui/react'
import { BsAirplaneEngines, BsBootstrapReboot,BsArrowClockwise } from "react-icons/bs";


const UserFilter = ()=> {
    const dispatch = useDispatch()
    const resetFilter = ()=> {
        dispatch(getDataUser())
    }

    const handleAlpha = (e) => {
        dispatch(alphabeticalOrder(e.target.value))
    }

    return (
        <>
        <Flex gap='4' justify={'center'} align={'center'} mx='2rem' py='.5rem'>
            <Flex justify='center' align={'center'} gap='4'  >
                <Heading>Orden</Heading>
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
                {/* <Box>
                    <FormControl>
                        <FormLabel>Fecha</FormLabel>
                        <Select
                            name='date'
                            onChange={handleOrderDate}>
                            <option value='A'>Reciente</option>
                            <option value='D'>Antigua</option>
                        </Select>
                    </FormControl>
                </Box> */}

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

            {/* <Flex justify='center' align={'center'} gap='4'  >
                <Heading>Filtrar</Heading>
                <Box>
                    <FormControl>
                        <FormLabel>Puntuacion</FormLabel>
                        <Select
                            name='rating'
                            onChange={handleFilterRating}>
                            <option value='all'>Todos</option>
                            <option value='A'>Mejores</option>
                            <option value='B'>Regular</option>
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
            </Box> 
            </Flex> 
            */}

            <Flex onClick={resetFilter} ><Button bg='blue.200' color='#000' fontSize='1.2rem' > <BsArrowClockwise/> </Button></Flex>
        </Flex>
    </>
    )
}

export default UserFilter;