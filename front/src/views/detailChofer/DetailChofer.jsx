import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { getAllConductores, getSolicitudes, postNewViaje } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const DetailChofer = () => {
  const conductores = useSelector((state) => state.conductores);
  const { solicitudesDeViajes } = useSelector(state => state)

  const dispatch = useDispatch();
  const handleChoferes = () => {
    dispatch(getAllConductores());
  };

  const handleClick = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Conductor elegido!",
      showConfirmButton: false,
      timer: 1500
    });
  }


  return (
    <Grid handleChoferes={handleChoferes} templateColumns="repeat(4, 1fr)" gap={6} bg="gray.100">
      {conductores.map((conductor) => (
        <GridItem key={conductor.id}>
          <Card fontSize='l'
            fontFamily="'DIN Alternate Black', sans-serif"
            bg="blue.20"
          >
            <CardHeader>{conductor.nombre}</CardHeader>
            <CardBody>{conductor.apellido}</CardBody>
            <CardBody>{conductor.numeroCelular}</CardBody>
            <CardBody>{conductor.maxPasajeros}</CardBody>
            <CardBody>{conductor.aeropuertoOrigen}</CardBody>
            <CardBody>{conductor.fotoChofer}</CardBody>
            <CardFooter>
              <Button onClick={handleClick} size="md" h="70px" w="40%" bg="blue.200"  >Elegir</Button>
            </CardFooter>
          </Card>
        </GridItem>)
      )
      }
    </Grid>
  );
};
export default DetailChofer;
