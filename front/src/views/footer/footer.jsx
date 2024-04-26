import { Flex, Box, Stack, Link, Image, Text, Heading, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import IconLinkdIn from '../../assets/icons/LOGOLINK.png'
import IconInstagram from '../../assets/icons/LOGOINSTA.png'

function Footer() {
  const IconGoogle = 'https://res.cloudinary.com/drgnsbah9/image/upload/v1706746887/Vamos/ihssnyf4wphzmddy8a5x.png'

  return (
    <Stack>
      <Flex flexDirection={{ base: 'column', md: 'column' }} w='100%'>
      <Flex  
      bg='#054C84' 
      minWidth='max-content' 
       alignItems="flex-start" 
      gap='5' pt='1rem' 
      boxSize='sm' 
      w='100%' 
      h='auto' 
      color='white' 
      paddingBottom={"100px"}
      // justify='space-evenly' 
      px='2rem' 
      flexDirection={{ base: 'column', md: 'row' }}
      >
          <Box w='300px' h='auto' >
          <Heading fontSize="x-large" justify={"flex-start"}>Nosotros</Heading>
            <Flex flexDirection='column' fontSize='1.3rem'>
                <Link href='/about' isExternal>
                Sobre Nosotros <ExternalLinkIcon mx='2px' />
                </Link>
                <Link href='/questions' isExternal>
                Preguntas Frecuentes <ExternalLinkIcon mx='2px' />
                </Link>
                <Link href='mailto:vamos.ong@gmail.com' isExternal>
                vamos.ong@gmail.com <ExternalLinkIcon mx='2px' />
                </Link>
            </Flex>
          </Box>

          <Box w='auto' h='auto' p='1' textAlign='center' order={{ base: 3, md: 2 }} textShadow='2px 2px 4px rgb(0, 0, 0, 0.5)'>
          <Flex flexDirection='column' fontSize='1.5rem' gap='4'>
              <Text>
                <b>Aeropuertos:</b>
                <div>
                  <address>Talara, Lima, Peru.</address>
                  <address>Tumbes, Lima, Peru.</address>
                </div>
              </Text>
            </Flex> 
          </Box>

          
        </Flex>

        <Box w='100%' order={{ base: 4, md: 4 }}  textShadow='2px 2px 4px rgb(0, 0, 0, 0.4)'>
          <Flex  bg='#10447E' color='white' fontSize='1.1rem' py='2' 
           
          marginBottom={{ base: "-100px", lg: "0px" }}>
            <Text marginLeft={{ base: "100px", lg: "110px" }}>© VAMOS 2024 Todos los Derechos Reservados.</Text>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Footer