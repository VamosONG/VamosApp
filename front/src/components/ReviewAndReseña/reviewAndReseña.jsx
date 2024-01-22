import { useEffect, useState } from "react"
import { getPendingTrips, getTripsById, postReview } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider,Text, Textarea } from "@chakra-ui/react";
import Swal from "sweetalert2";

const ReviewAndReseña=()=> {

    const dispatch= useDispatch()
    /* const tripsById = useSelector((state) => state.tripsById) */
    const viajesPendientes = useSelector((state) => state.viajesPendientes)
    const tripPending=viajesPendientes.find((trip)=>trip.userId==="762baea5-4422-44de-ae36-ddf9c6a9e43b") //Luego find con el id del usuario
    console.log(viajesPendientes)
    console.log(tripPending)
    

    const [input,setInput]=useState({
        qualification:0,
        comments:"",
     
    })
     
    
    const id = "762baea5-4422-44de-ae36-ddf9c6a9e43b"
    useEffect(() => {
        /* dispatch(getTripsById(id)) */
        dispatch(getPendingTrips())
    }, [dispatch]);

    const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleChange=(e)=>{
      setInput({
          ...input,
          userId:id, //Luego cambiar esto cuando funcione Log
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
        <Flex
        align="center"
        justify="center"
        /* height="100vh" */
        direction="column"
      >
        {/* {tripspending.map((trip, index) => ( */}
            <Card width="md">
            <CardHeader>
              <Heading size='md'>Reseña de tu viaje</Heading>
            </CardHeader>
          
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Ruta
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {tripPending?.origin}{"----->"}{tripPending?.destination} 
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Fecha - Hora
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                  {tripPending?.date}{" - "}{tripPending?.hour} 
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Conductor
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                  {tripPending?.driverFullName} 
                  </Text>
                </Box>
                
                <Box>
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
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Reseña
                  </Heading>
                  <Textarea  
                    name='comments'
                    onChange={handleChange} 
                    rows={4} placeholder='Déjanos algún comentario o sugerencia' 
                    width="sm" 
                    marginTop={"1rem"}/>
                </Box>
                <Box>
                    <Button onClick={handleSubmit}>
                        Enviar
                    </Button>
                </Box>
              </Stack>
            </CardBody>
          </Card>
         {/* ))} 
 */}
        
  
  
        
      </Flex>
    )
  }
  
  export default ReviewAndReseña