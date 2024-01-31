import { Flex, Box, Stack, Link, Image, Text, Heading, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import IconFace from '../../assets/icons/LOGOFACE.png'
import IconLinkdIn from '../../assets/icons/LOGOLINK.png'
import IconInstagram from '../../assets/icons/LOGOINSTA.png'

function Footer() {

  return (
    <Stack>
      <Flex flexDirection={{ base: 'column', md: 'column' }} w='100%'>
      <Flex  
      bg='#009ED1' 
      minWidth='max-content' 
      alignItems='center' 
      gap='5' pt='1rem' 
      boxSize='sm' 
      w='100%' 
      h='auto' 
      color='white' 
      justify='space-evenly' 
      px='2rem' 
      flexDirection={{ base: 'column', md: 'row' }}
      >
          <Box w='300px' h='auto'>
            <Flex gap='5' justify='center'>
              <Link href='#' target='_blank' >
                <Image
                  w='2rem'
                  h='2rem'
                  src={IconFace}
                  alt='Facebook Vamos ONG'
                />
              </Link>

              <Link href='#' target='_blank' >
                <Image
                  w='2rem'
                  h='2rem'
                  src={IconLinkdIn}
                  alt='linkdin Vamos ONG'
                  />
              </Link>

              <Link href='#' target='_blank' >
                <Image
                  w='2rem'
                  h='2rem'
                  src={IconInstagram}
                  alt='Instgram Vamos ONG'
                  />
              </Link>
            </Flex>

            <Flex flexDirection='column' gap='6' py='4'>
              <Heading 
                lineHeight='tall' 
                w='100%' 
                fontSize='1rem'
                textShadow='2px 2px 4px rgb(0, 0, 0, 0.5)'
                >
                AHORRA TIEMPO CON VAMOS EN LOS TRASLADOS A TU DESTINO FAVORITO.
                </Heading>
            </Flex>
          </Box>

          <Box w='auto' h='auto' p='1' textAlign='center' order={{ base: 3, md: 2 }} textShadow='2px 2px 4px rgb(0, 0, 0, 0.5)'>
            <Heading fontSize="x-large">Nosotros</Heading>
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

          <Box w='auto' h='auto' p='1' textAlign='center'  order={{ base: 3, md: 2 }} textShadow='2px 2px 4px rgb(0, 0, 0, 0.5)' >
            
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

        <Box w='100%' order={{ base: 4, md: 4 }} textAlign='center' textShadow='2px 2px 4px rgb(0, 0, 0, 0.4)'>
          <Flex justify='center' bg='#10447E' color='white' fontSize='1.1rem' py='2' marginBottom={{ base: "-100px", lg: "0px" }}>
            <Text>© VAMOS 2024 Todos los Derechos Reservados.</Text>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Footer