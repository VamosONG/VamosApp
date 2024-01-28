import React, { useState } from "react";
import DriverDetail from '../../views/driversViewAdmin/DetailDriver/driverDetail';
import SolicitudesDeViajes from '../solicitudes/solicitudesDeViajes';
import DriverTableView from '../../views/driversViewAdmin/driverTable';
import UserViewAdmin from '../../views/adminProfile/userViewAdmin';
import ReviewAdmin from '../../views/adminProfile/reviewAdmin';

import Stadistic from "../../views/stadistic/Stadistics/stadistic";
import EditPrice from "../editPrices/editPricesComponent"
import { Box, Flex, Text, VStack, Divider } from "@chakra-ui/react";




const AdminProfile = () => {
    const [activeComponent, setActiveComponent] = useState("Reservas");

    const renderComponent = () => {
        switch (activeComponent) {
            case "Reservas":
                return <SolicitudesDeViajes />;
            case "Conductores":
                return <DriverTableView />;
            case "Usuario":
                return <UserViewAdmin />;
            case "Reviews":
                return <ReviewAdmin />;
            case "Stadistic":
                    return <Stadistic />;
            case "EditPrice":
                    return <EditPrice />;
            default:
                return null;
        }
    };

    const handleMenuClick = (component) => {
        setActiveComponent(component);
    };


    return (

        <Flex bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg" marginTop={20}>
            <Flex flexDirection='column' pt={{ base: "100px", md: "0px" }}>
                <VStack spacing={3} align="stretch" bg="gray.200" p={5} height="920px" width="250px">
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Menu Admin
                    </Text>
                    <Text 
                        _hover={{ bg: '#E83D6F', color: 'white' }} 
                        bg={activeComponent === "Reservas" ? '#009ED1' : 'white'}
                        color={activeComponent === "Reservas" ? 'white' : 'black'}
                        p={2} 
                        borderRadius="md" 
                        textAlign="center" 
                        cursor="pointer"
                        onClick={() => handleMenuClick("Reservas")}
                    >
                        Reservas
                    </Text>
                    <Divider />
                    <Text 
                        _hover={{ bg: '#E83D6F', color: 'white' }} 
                        bg={activeComponent === "Conductores" ? '#009ED1' : 'white'}
                        color={activeComponent === "Conductores" ? 'white' : 'black'}
                        p={2} 
                        borderRadius="md" 
                        textAlign="center" 
                        cursor="pointer"
                        onClick={() => handleMenuClick("Conductores")}
                    >
                        Conductores
                    </Text>
                    <Divider />
                    <Text 
                        _hover={{ bg: '#E83D6F', color: 'white' }} 
                        bg={activeComponent === "Usuario" ? '#009ED1' : 'white'}
                        color={activeComponent === "Usuario" ? 'white' : 'black'}
                        p={2} 
                        borderRadius="md" 
                        textAlign="center" 
                        cursor="pointer"
                        onClick={() => handleMenuClick("Usuario")}
                    >
                        Usuario
                    </Text>
                    <Divider />
                    <Text 
                        _hover={{ bg: '#E83D6F', color: 'white' }} 
                        bg={activeComponent === "Reviews" ? '#009ED1' : 'white'}
                        color={activeComponent === "Reviews" ? 'white' : 'black'}
                        p={2} 
                        borderRadius="md" 
                        textAlign="center" 
                        cursor="pointer"
                        onClick={() => handleMenuClick("Reviews")}
                    >
                        Reviews
                    </Text>
                    <Divider />
                    <Text 
                        _hover={{ bg: '#E83D6F', color: 'white' }}
                        bg={activeComponent === "Stadistic" ? '#009ED1' : 'white'}
                        color={activeComponent === "Stadistic" ? 'white' : 'black'}
                        p={2} 
                        borderRadius="md" 
                        textAlign="center" 
                        cursor="pointer"
                        onClick={() => handleMenuClick("Stadistic")}
                    >
                        Stadistic
                    </Text>
                    <Divider />
                    <Text 
                        _hover={{ bg: '#E83D6F', color: 'white' }}
                        bg={activeComponent === "EditPrice" ? '#009ED1' : 'white'}
                        color={activeComponent === "EditPrice" ? 'white' : 'black'}
                        p={2} 
                        borderRadius="md" 
                        textAlign="center" 
                        cursor="pointer"
                        onClick={() => handleMenuClick("EditPrice")}
                    >
                        EditPrice
                    </Text>
                    
                </VStack>

            </Flex>
            <Box ml="250px" p={0} flex="1" margin={10}>
                {renderComponent()}
            </Box>
        </Flex>
    );
};

export default AdminProfile;

// import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, VStack, Text, Stack} from '@chakra-ui/react'
// import DriverDetail from '../../views/driversViewAdmin/DetailDriver/driverDetail';
// import DriverTableView from '../../views/driversViewAdmin/driverTable';
// import UserViewAdmin from '../../views/adminProfile/userViewAdmin';
// import ReviewAdmin from '../../views/adminProfile/reviewAdmin';
// import SolicitudesDeViajes from '../solicitudes/solicitudesDeViajes';

// const AdminProfile = () => {
//     return (
//         <Box bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg">
//             <Flex marginTop="100px">

//             <Stack spacing={4} align="stretch" bg="white" p={4} height="100vh" width="240px">
//             <Tabs isFitted variant='unstyled'>
//                 <TabList mb='0em' bg="white">
//                     <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Reservas</Tab>
//                     <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Conductores</Tab>
//                     <Tab _selected={{ color: 'white', bg: 'red.500' }}>Usuario</Tab>
//                     <Tab _selected={{ color: 'white', bg: 'yellow.500' }}>Reviews</Tab>
//                 </TabList>
//                 </Tabs>
//             </Stack>

        

//                 <Tabs isFitted variant='unstyled'>
//                 <TabList mb='0em' bg="white">
//                     <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Reservas</Tab>
//                     <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Conductores</Tab>
//                     <Tab _selected={{ color: 'white', bg: 'red.500' }}>Usuario</Tab>
//                     <Tab _selected={{ color: 'white', bg: 'yellow.500' }}>Reviews</Tab>
//                 </TabList>
//                 <TabPanels>
//                     <TabPanel>
//                         <SolicitudesDeViajes/>
//                     </TabPanel>
//                     <TabPanel>
//                         <DriverTableView/>
//                     </TabPanel>
//                     <TabPanel>
//                         <UserViewAdmin/>
//                     </TabPanel>
//                     <TabPanel>
//                         <ReviewAdmin/>
//                     </TabPanel>

//                 </TabPanels>
//                 </Tabs>
//             </Flex>
//         </Box>
//     )
// }

// export default AdminProfile;