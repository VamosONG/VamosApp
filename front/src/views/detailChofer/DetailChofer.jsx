import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
} from "@chakra-ui/react";
import { getAllConductores, postNewViaje } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const DetailChofer = () => {
  const conductores = useSelector((state) => state.conductores);
  const {solicitudesDeViajes} = useSelector(state => state) 

  const dispatch = useDispatch();
  const handleChoferes = () => {
    dispatch(getAllConductores());
    dispatch(postNewViaje())
  };


console.log(conductores)
  return (
    <Box handleChoferes= {handleChoferes}>
        {/* <Box>
          {
            solicitudesDeViajes.map((reserva, index)=>{
              return (<Card 
                key= {index}
                >
                  <CardHeader></CardHeader>
                  <CardBody>{reserva}</CardBody>
                </Card>)
            })
          }
        </Box> */}
      {conductores.map((conductor) => (
        <Card
          key={conductor.id}
         direction="column" 
         overflow="hidden"
         variant="outline"
         maxW='sm'
        >
          <CardHeader size="md">{conductor.nombre}</CardHeader>
          <CardBody>{conductor.apellido}</CardBody>
          <CardBody>{conductor.numeroCelular}</CardBody>
          <CardBody>{conductor.maxPasajeros}</CardBody>
          <CardBody>{conductor.aeropuertoOrigen}</CardBody>
          <CardBody>{conductor.fotoChofer}</CardBody>
          <CardFooter>
            <Checkbox
            
            ></Checkbox>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
export default DetailChofer;
