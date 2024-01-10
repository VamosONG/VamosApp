import {  Button, Flex, Stack, AvatarGroup, Avatar, Box, Spacer,  } from "@chakra-ui/react"
const NavBar = () => {
    return (
        <Flex as="nav" bg= "blue.200" alignItems="center" justify="space-around" >
            <Stack direction="row" spacing={15} align="center" >
            <Button colorScheme='blue'>Inicio</Button>
            <Button colorScheme='blue'>Reservar</Button>
            <Button colorScheme='blue'>Preguntas Frecuentes</Button>
            <Button colorScheme='blue' >Nosotros</Button>
            </Stack>
            
            <Spacer/>
            <AvatarGroup spacing='1rem'>
                <Avatar bg='teal.500' />
            </AvatarGroup>
            <Box>
                User
            </Box>
        </Flex>
    )
}
export default NavBar;