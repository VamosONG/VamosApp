
import { Center, Box, Collapse, Heading, Text, Stack, Button, Flex, Image, Divider, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'




const PaymentFail = () => {
    return (
        <Center bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/eqdrrjmlkojpiiwlhwjo.jpg">
            <Flex bgSize="cover" bgRepeat="no-repeat" >

                {/* <Box bg='#009ED1' w={{ base: "20rem", md: "30rem" }} spacing={4}>

                    <Flex justifyContent="center" p={250}>
                        <Stack >
                            <Heading
                                color='white'
                                textTransform='uppercase'
                                fontFamily="'DIN Alternate Black', sans-serif"
                                letterSpacing='2px'
                                fontSize={['2xl', null, '5xl']}
                                mb='2'
                                textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
                            >
                                Su pago ha sido rechazado!!!
                            </Heading>



                            <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bg='rgb(333 333 333)' p={4} mt={4}>

                                Intente nuevamente!

                            </Box>
                        </Stack> */}
                {/* </Flex>

                </Box> */}

                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://w7.pngwing.com/pngs/866/54/png-transparent-emoji-sadness-emoticon-smiley-sad-emoji-crying-imoji-face-sticker-desktop-wallpaper-thumbnail.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            w="50rem"
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Living room Sofa</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

            </Flex>
        </Center>
    )
}

export default PaymentFail;