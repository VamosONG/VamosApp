
import { Box, Button, Card, CardBody, CardFooter, CardHeader} from "@chakra-ui/react";
import { getAllConductores } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const DetailChofer = () => {

    const conductores = useSelector(state => state.conductores)
    console.log(conductores);
    const dispatch= useDispatch()
   const handleChoferes = () => {
    dispatch (getAllConductores())
   }
    return (
        <Box>
            <Button onClick={handleChoferes}>conductores</Button>
            {conductores.map((conductor) => (<Card key={conductor.id}   direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'>
               <CardHeader size="md">{conductor.nombre}</CardHeader>
               <CardBody>{conductor.apellido}</CardBody>
               <CardBody>{conductor.numeroCelular}</CardBody>
               <CardBody>{conductor.maxPasajeros}</CardBody>
               <CardBody>{conductor.aeropuertoOrigen}</CardBody>
               <CardBody>{conductor.licenciaManejo}</CardBody>
               <CardFooter>{conductor.fotoChofer}</CardFooter>
            </Card>
))}
</Box>
)   
}
export default DetailChofer;