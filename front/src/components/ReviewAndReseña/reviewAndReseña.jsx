import { useEffect, useState } from "react"
import { getTripsById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider,Text, Textarea } from "@chakra-ui/react";

const ReviewAndReseña=()=> {

    const dispatch= useDispatch()
    const tripsById = useSelector((state) => state.tripsById)
    const tripsByIdPrueba=[1/* ,2,3 */]

    const [input,setInput]=useState({
        userId:"",
        driverId:"",
        date:"",
        qualification:"",
        comments:"",
        tripId:""
    })
    
    
    const id = "3027b2fa-4997-4068-9f6d-c847baa02291"
    useEffect(() => {
        dispatch(getTripsById(id))
    }, []);

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
          userId:"3027b2fa-4997-4068-9f6d-c847baa02291",
          driverId:"1ea150d6-9fa0-40cb-bb38-9493a0969e6f",
          date:"2024-01-26",
          qualification:rating,
          tripId:"0642a055-2d76-425a-9b04-a1a67e456b69"
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
        {tripsByIdPrueba.map((trip, index) => (
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
                    Aeropuerto Talara - Decameron {/* Aquí debería colocar variables origin destination */}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Fecha - Hora
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    05/01/2024   -    20:30 hs {/* Aquí debería colocar variables date hour */}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Conductor
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    Juan Montaron {/* Aquí debería colocar variables driverName */}
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