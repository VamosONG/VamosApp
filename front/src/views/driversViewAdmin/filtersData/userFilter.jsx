import { alphabeticalOrder, getDataUser, orderListTrips, orderSearchUsers, ratingOrder, stateFilter } from "../../../redux/actions";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import { Select, Box, Text, Flex, Heading, FormControl, FormLabel, Button, Tooltip, Input } from '@chakra-ui/react'
import { BsAirplaneEngines, BsBootstrapReboot, BsArrowClockwise, BsFilterCircle, BsFunnel } from "react-icons/bs";


const UserFilter = () => {
    const dispatch = useDispatch()
    const resetFilter = () => {
        setSearch({
            admin: '',
            searchInput: ''
          });
        dispatch(getDataUser())
    }

    // const handleAlpha = (e) => {
    //     dispatch(alphabeticalOrder(e.target.value))
    // }
    const handleFilterAdmin = (e) => {
        dispatch(stateFilter(e.target.value))
    }

    // const handleTrips = (e) => {
    //     dispatch(orderListTrips(e.target.value))
    // }
   
    const [search, setSearch] = useState({
        searchInput :'',
        admin:''})
    // const searcher = (e) => {
    //     setSearch(e.target.value)
    // }
    // const handleSubmit = () => {
    //     dispatch(orderSearchUsers(search.searchInput))
    // }
    const handleSubmit = async (e) => {
        console.log("Esto es lo que trae el input ", search);
        dispatch(orderSearchUsers(search));
      };
      const handleChange = (e) => {
        setSearch({
          ...search,
          [e.target.name]: e.target.value
        });
      };
    return (
        <>
            <Flex gap='4' justify={'center'} align={'center'} mx='2rem' py='.5rem'>
                <Flex justify='center' align={'center'} gap='4'  >
                    <Flex justify={'center'} align={'center'} fontSize={'1.5rem'}>
                    <Input
              placeholder='Buscar por nombre / correo'
              name="searchInput"
              onChange={handleChange}
              value={search.searchInput}
              border={'1px solid gray'}
              bgColor="white"
              color="black"
            />
                        {/* <Input placeholder='Buscar por nombre / correo' value={search.searchInput} onChange={(e) => { setSearch({...search,searchInput:e.target.value})}} border={'1px solid gray'} bgColor="white" color="black" /> */}
                        
                    </Flex >
                    {/* <Tooltip label='Ordenar datos' bg='#10447E' placement='top' >
                        <Text fontSize={'2rem'}>
                            <BsFilterCircle />
                        </Text>
                    </Tooltip> */}
                    {/* <Box>
                        <FormControl>
                            <FormLabel color="white">Nombre</FormLabel>
                            <Select
                                bgColor="white"
                                name='alphabetical'
                                onChange={handleAlpha}>
                                <option value='UA'>A - Z</option>
                                <option value='UD'>Z - A</option>
                            </Select>
                        </FormControl>
                    </Box> */}
                    {/* <Box>
                        <FormControl>
                            <FormLabel color="white">Viajes</FormLabel>
                            <Select
                                bgColor="white"
                                name='trips'
                                onChange={handleTrips}>
                                <option value='vjsA'>Mas</option>
                                <option value='vjsD'>Menos</option>
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

                {/* <Flex justify='center' align={'center'} gap='4'  > */}
                {/* <Tooltip label='Filtrar datos' bg='#10447E' placement='top' >
                        <Text fontSize={'2rem'}>
                            <BsFunnel />
                        </Text>
                    </Tooltip> */}
                    <Box>
                        <FormControl>
                            
                            <Select
                                bgColor="white"
                                name='state'
                                onChange={(e)=>setSearch({...search,admin:e.target.value})}
                                value={search.admin}
                            >
                                <option value=''>Todos</option>
                                <option value='admin'>Admin</option>
                                <option value='users'>Usuarios</option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button onClick={handleSubmit}>Buscar</Button>
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
                {/* </Flex> */}


                <Flex onClick={resetFilter} ><Button bg='green.300' color='#000' fontSize='1.2rem' > <BsArrowClockwise /> </Button></Flex>
            </Flex>
        </>
    )
}

export default UserFilter;