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