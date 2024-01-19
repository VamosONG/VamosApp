import { useEffect, useState } from "react"
import { getTripsById, postReview } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider,Text, Textarea } from "@chakra-ui/react";

const ReviewAndReseña=()=> {

    const dispatch= useDispatch()
    const tripsById = useSelector((state) => state.tripsById)
    console.log(tripsById)
    

    const [input,setInput]=useState({
        userId:"",
        driverId:"",
        date:"",
        qualification:"",
        comments:"",
        tripId:""
    })
    
    
    const id = "c9f86a72-c6b4-4ac2-9b31-0d8eaee8b23b"
    useEffect(() => {
        dispatch(getTripsById(id))
    }, [dispatch]);

    const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleChange=(e)=>{
      setInput({
          ...input,
          comments:e.target.value
        })
    }

    const handleSubmit=()=>{
      setInput({
          ...input,
          userId:"c9f86a72-c6b4-4ac2-9b31-0d8eaee8b23b",
          driverId:tripsById.driverId/* '46d639a7-5468-495b-b9a7-f666517d3bfb' */,
          date:tripsById.date,
          qualification:rating,
          tripId:tripsById.id
        })
        dispatch(postReview(input))
    }


    return (
        <Flex
        align="center"
        justify="center"
        /* height="100vh" */
        direction="column"
      >
        {tripsById.map((trip, index) => (
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
                    {trip.origin}{"----->"}{trip.destination} {/* Aquí debería colocar variables origin destination */}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Fecha - Hora
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                  {tripsById.date}{" - "}{tripsById.hour} {/* Aquí debería colocar variables date hour */}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Conductor
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    Juan Montaron 
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
         ))} 

        
  
  
        
      </Flex>
    )
  }
  
  export default ReviewAndReseña