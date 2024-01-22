import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"

const AdminProfile = () => {

    const dispatch = useDispatch()
    //const adminName = useSelector(state => state.currentUser.name)

    useEffect(()=> {
        const getAdminProfile= async() =>{
        const data= await dispatch(axios.get("http://localhost:3001/dashboard/admin").data)
        return data}
        getAdminProfile()
    },[dispatch]);



    return(
        <Card>
  <CardHeader>
    <Heading size='md'>PERFIL ADMINISTRADOR</Heading>
  </CardHeader>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
            Nombre:
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Apellido:
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         DNI
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         TELEFONO
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    )

}
export default AdminProfile;