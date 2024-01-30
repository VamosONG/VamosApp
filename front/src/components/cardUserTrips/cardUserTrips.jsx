import { PhoneIcon, AddIcon, WarningIcon, EditIcon } from '@chakra-ui/icons'
import { BsAlarm, BsCalendar3, BsCursorFill, BsGeoAltFill, BsPersonFill, BsCurrencyDollar, BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
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
    Divider, Avatar, Tooltip, Badge
} from '@chakra-ui/react';
import ImgMancora from '../../assets/imgPlaces/mancora.jpeg'
import ImgZorrito from '../../assets/imgPlaces/zorritos.jpg'
import ImgDecameron from '../../assets/imgPlaces/decameron.jpg'



const CardUserTrips = ({ userDetail, stateFilter }) => {
    const filteredTrips = userDetail.Trips.filter((trip) => trip.stateOfTrip === stateFilter);

    // Verifica si filteredTrips tiene una longitud mayor a 0 antes de renderizar el componente
    if (filteredTrips.length === 0) {
        return null; // No renderiza nada si no hay viajes
    }
    return (
        <Flex bg='white' w={'100%'} h='100%' borderRadius={6} px={1} pt='0' flexDirection={'column'}  >
            {filteredTrips.length && filteredTrips.map((trips) => (
                <>
                    <Flex flexDirection={'column'} gap='2' bg='gray.200' borderRadius={4} w={'100%'} p='2' key={trips.id} my='2'>
                        <Flex w={'100%'} >
                            <Avatar src={trips.origin === 'MANCORA' || trips.destination === 'MANCORA'  ? ImgMancora : trips.origin === 'ZORRITOS' | trips.destination === 'ZORRITOS' ? ImgZorrito : ImgDecameron} loading='lazy' />
                            <Flex flexDirection={'column'} w='100%' gap='2' overflow={'hidden'}>
                                <Flex ml='3' justify={'start'} gap='2'>
                                    <Text fontWeight='bold' fontSize='md' color='#10447E' title='Origen' w={'100%'}  >
                                        <BsCursorFill />
                                    </Text>
                                    <Text
                                        fontSize='.7rem' whiteSpace={'nowrap'}
                                        textAlign={'end'}>
                                        {trips.origin ? trips.origin : 'Sin viajes'}
                                    </Text>
                                </Flex>
                                <Flex ml='3' justify={'start'} gap='2'>
                                    <Text fontWeight='bold' fontSize='md' color='#10447E' title='Destino' w={'100%'}   >

                                        <BsGeoAltFill />
                                    </Text>
                                    <Text 
                                        fontSize='.7rem' whiteSpace={'nowrap'}
                                        textAlign={'end'} >
                                        {trips.destination ? trips.destination : 'Sin viajes'}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex w={'100%'} >
                            <Flex w='100%' justify={'space-between'} >
                                <Flex ml='3' justify={'start'} gap='2'>
                                    <Text fontWeight='bold' fontSize='md' color='#10447E'>
                                        <BsCalendar3 />
                                    </Text>
                                    <Text
                                        fontSize='.7rem' whiteSpace={'nowrap'}>
                                        {trips.date ? trips.date : 'Sin viajes'}
                                    </Text>
                                </Flex>
                                <Flex ml='3' w='100%' justify={'end'}>
                                    <Text fontWeight='bold' fontSize='md' color='#E83D6F'>
                                        <BsAlarm />
                                    </Text>
                                    <Text
                                        fontSize='.7rem'
                                        whiteSpace={'nowrap'}>
                                        {trips.hour ? trips.hour : 'Sin viajes'}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex w={'100%'} justify={'center'}>
                            <Flex w='100%' justify={'space-around'} bg='gray.100'>
                                <Flex ml='3' gap='2' w={'33%'} >

                                    <Text fontWeight='bold' fontSize='md' color='#10447E'>
                                        <BsPersonFill />
                                    </Text>
                                    <Text
                                        fontSize='.7rem' whiteSpace={'pretty'}>
                                        {trips.quantityPassengers ? trips.quantityPassengers : 'Sin viajes'}
                                    </Text>
                                </Flex>

                                <Flex ml='3' w={'33%'} justify={'center'}>
                                    <Text fontWeight='bold' fontSize='md' color='green'>
                                        < BsChevronDoubleRight />
                                    </Text>
                                    <Text
                                        fontSize='.7rem'
                                        whiteSpace={'pretty'}>
                                        {trips.stateOfTrip === 'reserved' ? 'Reservado' : 'Completo'}
                                    </Text>
                                    <Text fontWeight='bold' fontSize='md' color='green'>
                                        <BsChevronDoubleLeft />
                                    </Text>
                                </Flex>

                                <Flex ml='3' w={'33%'} justify={'end'} >
                                    <Text fontWeight='bold' fontSize='md' color='green'>
                                        <BsCurrencyDollar />
                                    </Text>
                                    <Text
                                        fontSize='.7rem'
                                        whiteSpace={'pretty'}>
                                        {trips.price ? trips.price : 'Sin viajes'}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </>
            )
            )}
        </Flex>
    )
}

export default CardUserTrips