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
      px='3rem' 
      flexDirection={{ base: 'column', md: 'row' }}
      >
       <Box w='auto' h='auto' p='1' textAlign='center' order={{ base: 3, md: 2 }} pr={"4%"}>
    <Heading fontSize="x-large" textAlign="left" mb={4}>Nosotros:</Heading>
    <Flex flexDirection='column' fontSize='1.3rem'  textAlign="left" > {/* Alineación hacia la izquierda */}
        <Link href='/about' isExternal mb={2}>
            Sobre Nosotros <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='/questions' isExternal mb={2}>
            Preguntas Frecuentes <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='mailto:vamos.ong@gmail.com' isExternal >
            ong.vamos.2024@gmail.com <ExternalLinkIcon mx='2px' />
        </Link>
    </Flex>
</Box>

          <Box w='auto' h='auto' p='1' textAlign='center' order={{ base: 3, md: 2 }} >
          <Flex flexDirection='column' fontSize='1.3rem' textAlign="left">
              <Text textAlign="left" >
              <Heading fontSize="x-large" textAlign="left" mb={4}>Aeropuertos:</Heading>
                <div>
                  <Text mb={2}> Talara, Lima, Peru.</Text>
                  <Text mb={2}> Tumbes, Lima, Peru.</Text>
                  <Text mb={2}> Piura, Lima, Peru.</Text>
                </div>
              </Text>
            </Flex> 
          </Box>

          
        </Flex>

        <Box maxW='100%'  pl={"3%"} pr={"3%"} bgColor={"#054C84"} >
          <Flex  bg='#054C84' color='white' fontSize='1.1rem' py='2' 
           borderColor={"white"} borderTop={"1px"}
          >
            <Text >© VAMOS 2024 Todos los Derechos Reservados.</Text>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Footer