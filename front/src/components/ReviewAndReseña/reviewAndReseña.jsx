import { useEffect, useState } from "react"
import { getPendingTrips, getTripsById, postReview } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, Stack, StackDivider,Text, Textarea } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { PhoneIcon, AddIcon, WarningIcon,ArrowRightIcon } from '@chakra-ui/icons'


const ReviewAndReseña=()=> {

    const dispatch= useDispatch()
    const currentUserId = useSelector((state) => state.currentUser?.id)
    const viajesPendientes = useSelector((state) => state.viajesPendientes)
    const tripPending=viajesPendientes.find((trip)=>trip.userId===currentUserId)
    
    const bgImg="https://res.cloudinary.com/drgnsbah9/image/upload/v1706565530/Vamos/d7q4rpqehk0nkjpmwypf.jpg"
    const [input,setInput]=useState({
        qualification:0,
        comments:"",
     
    })
     
    useEffect(() => {
        dispatch(getPendingTrips())
    }, [dispatch]);

    const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleChange=(e)=>{
      setInput({
          ...input,
          userId:currentUserId, //Luego cambiar esto cuando funcione Log
          driverId:tripPending.driverId,
          date:tripPending.date,
          qualification:rating,
          tripId:tripPending.id,
          comments:e.target.value
        })
    }

    const handleSubmit=()=>{
      /* setInput({
          ...input,
          userId:"c9f86a72-c6b4-4ac2-9b31-0d8eaee8b23b",
          driverId:tripPending.driverId,
          date:tripPending.date,
          qualification:rating,
          tripId:tripPending.id
        }) */
        dispatch(postReview(input))
        Swal.fire({
          title: "Reseña enviada",
          text: "Muchas gracias por tu tiempo",
          icon: "success"
        }).then(() => {
          // Redirigir a la página anterior
          window.history.back();
        });
    }


    return (
      tripPending ? (
        <Flex
        align="center"
        justify="center"
        height="100vh"
        direction="column"
        marginTop={{base: '0', md: '80px'}}
        bgImage={bgImg}
        w='auto'
        
      >
        
            <Card w={{base: '20rem', md:  "600px"}}  bg='gray.100' >
            <CardHeader>
              <Heading size='md'>Reseña de tu viaje</Heading>
            </CardHeader>
          
            <CardBody >
              <Stack divider={<StackDivider />} spacing='4' >
                <Flex gap={4} w={{base:'auto' , md: '100%'}} justify={'space-between'} flexDirection={{base: 'column', md: 'row'}}> 
                <Box textAlign={'start'}>
                  <Heading size='xs' textTransform='uppercase'>
                    Ruta
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {tripPending?.origin}{" -----> "}{tripPending?.destination} 
                  </Text>
                </Box>
                <Box textAlign={'start'}>
                  <Heading size='xs' textTransform='uppercase'>
                    Fecha - Hora
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                  {tripPending?.date}{" - "}{tripPending?.hour} 
                  </Text>
                </Box>
                </Flex>

                <Flex  gap={4} w={{base:'auto' , md: '100%'}} justify={'space-between'} flexDirection={{base: 'column', md: 'row'}}>
                  
                <Box textAlign={'start'}>
                  <Heading size='xs' textTransform='uppercase'>
                    Conductor
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                  {tripPending?.driverFullName} 
                  </Text>
                </Box>
                
                <Box textAlign={'start'}>
                  <Heading size='xs' textTransform='uppercase'>
                    Puntuación
                  </Heading>
                  <Box>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      role="button"
                      onClick={() => handleRatingChange(star)}
                      style={{ cursor: "pointer" }}
                    >
                      {star <= rating ? "⭐" : "☆"}
                    </Button>
                  ))}
                </Box>
                </Box>
                </Flex>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Reseña
                  </Heading>
                  <Textarea  
                    name='comments'
                    onChange={handleChange} 
                    rows={4} placeholder='Déjanos algún comentario o sugerencia' 
                    width="90%" 
                    marginTop={"1rem"} bg='white' color='black' />
                </Box>
                <Box>
                    <Button onClick={handleSubmit} bg='green.400' w='90%' letterSpacing={6}>
                        ENVIAR
                    </Button>
                </Box>
              </Stack>
            </CardBody>
          </Card>
      </Flex>
      ):(<Center bgImage={bgImg} bgSize="cover" bgRepeat="no-repeat"/* h='100px' */h='40rem' color='white' fontSize='3xl'>
          <Card>
            <CardBody bgGradient='linear(to-r, blue.200, pink.300)'>
              <Text>Aún no tienes viajes para calificar</Text>
            </CardBody>
          </Card>
        </Center>)
    )
  }
  
  export default ReviewAndReseña