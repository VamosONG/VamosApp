import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Badge } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, Flex, Box, Link, Tooltip
} from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react";
import { BsEnvelopeArrowUp, BsWhatsapp, BsEnvelopeAtFill, BsFillAirplaneFill, BsFillCake2Fill, BsFillPersonVcardFill,BsFillPersonFill, BsFillTelephoneInboundFill, BsFillTaxiFrontFill, BsFillPersonPlusFill, BsFillCarFrontFill,Bs123, BsAlphabetUppercase, BsCalendar2X } from "react-icons/bs";
import DriverDetailMobile from './driverDetailMobile';



const DriverDetail = (props) => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  return (
    <Card boxSize='4xl' overflowX='scroll' w={{base: '25rem', md: '60vw'}} >
      <CardBody>
        <Stack  spacing='3'>
          <Heading bg='#10447E' py='2' px='4'  borderRadius='8' color={'whitesmoke'} w={'max-content'} alignSelf={'center'} dispaly='flex' justifySelf={'center'}>
            Conductor:
            <Badge ml='1' fontSize='2rem' bg='red' color='white' >
              {props.name} 
            </Badge> 
          </Heading>
          <Flex gap='4' flexDirection={{base: 'column', md: 'row'}} w='100%' h={{base: '200px', md: '300px'}}  position={'relative'}>
            <Flex boxShadow={'0 0px 20px black'} borderRadius='lg' w='100%'  justify={'space-between'}>
              <Image
                src={props.driverImg}
                alt={props.name}
                borderRadius='lg'
                objectFit={'cover'}
                w='100%'
              />
            </Flex>
            {!isMobile ? (
            <Flex gap={4} w='50%' justify='space-between' m='0 auto' flexDirection={'row'} >
              <TableContainer w='auto' h='auto' >
                <Table variant='striped' bg='gray.300' display={'flex'} >
                  <Thead >
                    <Tr display={"flex"}
                            flexDirection={'column'} >
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Nombre y Apellido'><BsFillPersonFill/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='DNI'><BsFillPersonVcardFill/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Correo'><BsEnvelopeAtFill/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Fec.Nac'><BsFillCake2Fill/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Telefono'><BsFillTelephoneInboundFill/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Zona'><BsFillAirplaneFill/></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr display={"flex"}
                            flexDirection={'column'} >
                      <Td fontSize={'1.2rem'} h={'2.5rem'} textTransform={'capitalize'} >{props.name} {props.surname}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'} >{props.dni}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'} >{props.email}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'} >{props.birthday}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'} >{props.phone}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'} >{props.airports}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <TableContainer w='auto'>
                <Table variant='striped' bg='gray.300'  display={'flex'}>
                  <Thead>
                    <Tr display={"flex"}
                            flexDirection={'column'}>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Vehiculo'>
                          <BsFillTaxiFrontFill/>
                        </Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Modelo'><BsFillCarFrontFill/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Licencia'><Bs123/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Soat'><BsCalendar2X/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Placa'><BsAlphabetUppercase/></Th>
                      <Th fontSize={'1.2rem'} h={'2.5rem'} title='Max. Psjr'><BsFillPersonPlusFill/></Th>
                    </Tr>
                  </Thead>
                  <Tbody  >
                    <Tr display={"flex"}
                            flexDirection={'column'} textTransform={'capitalize'}>
                      <Td fontSize={'1.2rem'} h={'2.5rem'}>{props.carType}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'}>{props.carModel}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'}>{props.driverLicense}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'}>{props.carSoat}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'}>{props.carPatent}</Td>
                      <Td fontSize={'1.2rem'} h={'2.5rem'}>{props.capacityPassengers}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
            ) : (
              <DriverDetailMobile {...props}/>
            )}

          </Flex>

          <Flex w='100%' h={{base: '200px', md: '350px'}} gap={4} p='4' flexDirection={{base: 'column', md: 'row'}}  >
            <Flex w={{base: '100%', md: '50%'}}
              h='auto' gap={4} flexDirection={'column'} bg='gray.50' borderRadius='lg' p='4' boxShadow={'0 10px 10px black'} overflow={'hidden'}>
              <Text fontSize='1.5rem' fontWeight={'bold'}>Vehiculo</Text>
              <Image
                src={props.carImg}
                alt={props.name}
                borderRadius='lg'
                w='100%'
                objectFit='cover'
                h={'240px'}
              />
            </Flex>

            <Flex w={{base: '100%', md: '50%'}}
              h='auto' gap={4} flexDirection={'column'} bg='gray.50' borderRadius='lg' p='4' boxShadow={'0 10px 10px black'} overflow={'hidden'}>
              <Text fontSize='1.5rem' fontWeight={'bold'} >Perm. Circulación</Text>
              <Image
                src={props.circulationPermit}
                alt={props.name}
                borderRadius='lg'
                w='100%'
                objectFit='cover'
                h={'240px'}
              />
            </Flex>


          </Flex>

        </Stack>
      </CardBody>
      <Divider />
      <CardFooter > 
        <ButtonGroup spacing='2'>
        <Link color='teal.500' href={`mailto:${props.email}`}>
          <Tooltip label='Enviar Correo' bg='green' placement='top' fontSize='1.3rem' borderRadius={4} px='2'>
          <Button variant='solid' colorScheme='blue' fontSize='1.5rem'>
            <BsEnvelopeArrowUp/>
          </Button>
          </Tooltip>
        </Link>

        <Link color='teal.500' href={`whatsapp://send?phone=${props.phone}`}>
          <Tooltip label='Mensaje' bg='green' placement='top' fontSize='1.3rem' borderRadius={4} px='2'>
          <Button variant='solid' colorScheme='blue' fontSize='1.5rem'>
            <BsWhatsapp/>
          </Button>
          </Tooltip>
        </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default DriverDetail;