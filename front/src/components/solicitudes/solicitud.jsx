
import Swal from 'sweetalert2'
import { Link } from "react-router-dom" 

import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
  } from "@chakra-ui/react";
  import { getAllConductores, postNewViaje } from "../../redux/actions";
  import { useDispatch, useSelector } from "react-redux";




function Solicitud({solicitud}) {
  
    
    const {id,origen,destino,fecha,hora,cantPasajeros}=solicitud
    console.log(fecha)
    return (
  
      <div >
        <Card
          key={id}
          direction='row'
          h='10%'
          w='1%'
        >
          <CardHeader /* size="md" */>solicitud</CardHeader>
          <CardBody  >{id}</CardBody>
          <CardBody>{origen}</CardBody>
          <CardBody>{destino}</CardBody>
          <CardBody>{fecha}</CardBody>
          <CardBody>{hora}</CardBody>
          <CardBody>{cantPasajeros}</CardBody>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </div>
      
    )
  }
  
export default Solicitud