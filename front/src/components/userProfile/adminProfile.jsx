import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box } from '@chakra-ui/react'
import DriverDetail from '../../views/driversViewAdmin/DetailDriver/driverDetail';
import DriverTableView from '../../views/driversViewAdmin/driverTable';
import UserViewAdmin from '../../views/adminProfile/userViewAdmin';
import ReviewAdmin from '../../views/adminProfile/reviewAdmin';
import SolicitudesDeViajes from '../solicitudes/solicitudesDeViajes';

const AdminProfile = () => {
    return (
        <Box bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg">
            <Flex marginTop="100px" alignItems="center" justify="center">

                <Tabs isFitted variant='unstyled'>
                <TabList mb='0em' bg="white">
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Reservas</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Conductores</Tab>
                    <Tab _selected={{ color: 'white', bg: 'red.500' }}>Usuario</Tab>
                    <Tab _selected={{ color: 'white', bg: 'yellow.500' }}>Reviews</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SolicitudesDeViajes/>
                    </TabPanel>
                    <TabPanel>
                        <DriverTableView/>
                    </TabPanel>
                    <TabPanel>
                        <UserViewAdmin/>
                    </TabPanel>
                    <TabPanel>
                        <ReviewAdmin/>
                    </TabPanel>

                </TabPanels>
                </Tabs>
            </Flex>
        </Box>
    )
}

export default AdminProfile;