import { Select, Box, Text, Flex, Heading } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { airportFilter, alphabeticalOrder, carFilter, passengerOrder, ratingOrder } from '../../../redux/actions'


const OrderFilterAlphabetical = () => {
    const data = useSelector((state) => state.allData)

    const dispatch = useDispatch()

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
    const airportsFound = ["Aeropuerto Tumbes", "Aeropuerto Talara"];

    const carTypeFound = ["auto", "camioneta", "van", 'van plus'];
    return (
        <>
        <Flex gap='4' justify={'center'} align={'center'}>
            <Flex justify='center' align={'center'} gap='4'  >
                <Heading>Orden</Heading>
                <Box>
                    <Select placeholder='Alfabetico'
                        name='alphabetical'
                        onChange={handleOrderAlpha}>
                        <option value='A'>A - Z</option>
                        <option value='D'>Z - A</option>
                    </Select>
                </Box>

                <Box>
                    <Select placeholder='Cantida de Pasajeros'
                        name='passenfers'
                        onChange={handleOrderPassenger}>
                        <option value='A'>➕ - ➖</option>
                        <option value='D'>➖ - ➕</option>
                    </Select>
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

            <Flex justify='center' align={'center'} gap='4'  >
                <Heading>Filtrar</Heading>
                <Box>
                    <Select
                        name='cartype'
                        onChange={handleFilterCar}>
                            <option disabled>Vehiculo</option>
                            {carTypeFound.map((car, index) => (
                                <option key={index} value={car}>{car}</option>
                            ))}
                    </Select>
                </Box>

                <Box>
                    <Select
                        name='airpots'
                        onChange={handleFilterAirport}>
                            <option disabled>Zona</option>
                            {airportsFound.map((airports, index) => (
                                <option key={index} value={airports} >{airports}</option>
                            ))}
                    </Select>
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
        </Flex>
        </>
    )
}

export default OrderFilterAlphabetical