import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import DriverDetail from '../../views/driversViewAdmin/DetailDriver/driverDetail';
import DriverTableView from '../../views/driversViewAdmin/driverTable';
import UserViewAdmin from '../../views/adminProfile/userViewAdmin';
import ReviewAdmin from '../../views/adminProfile/reviewAdmin';
import SolicitudesDeViajes from '../solicitudes/solicitudesDeViajes';

const AdminProfile = () => {
    return (
        <>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Reservas</Tab>
                    <Tab>Conductores</Tab>
                    <Tab>Usuario</Tab>
                    <Tab>Reviews</Tab>
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
        </>
    )
}

export default AdminProfile;