import { useDispatch, useSelector } from "react-redux"

import { Box, Card, CardBody, CardHeader, Center, useDisclosure, Grid, GridItem } from '@chakra-ui/react'
import {
  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Avatar, Tooltip,
    TableContainer, Flex,
  FormControl,
  FormLabel,
  Input, Select, Button, Heading, Stack,
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from '@chakra-ui/react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'

import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Solicitud from "./solicitud"


import { getCanceledTrips, getPendingTrips, getReservedTrips, idDeSolicitud, orderSearch } from "../../redux/actions"
import { useEffect, useState } from "react"
import SolicitudesDeViajesCompleted from "./solicitudesDeViajesCompleted"
import SolicitudesDeViajesPending from "./solicitudesDeViajesPending"
import SolicitudesDeViajesReserved from "./solicitudesDeViajesReserved"




function SolicitudesDeViajes() {

  const dispatch= useDispatch()

  const tabStyles = {
    borderRight: "2px solid #009ED1",
    borderTop: "2px solid #009ED1",
    borderLeft: "2px solid #009ED1",
  };

  /* useEffect(() => {
    dispatch(getReservedTrips())
  }, []) */
 
  

  return (
    

      <Tabs isFitted variant="enclosed" marginTop={'7rem'} bg="gray.200" borderRadius="md">
        
      <TabList mb="1em" /* borderBottom="2px solid #009ED1" */>
        <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Viajes sin conductor asignado</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Viajes con conductor asignado</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Viajes concretados</Tab>
      </TabList>
      

      <TabPanels>
        <TabPanel>
          <SolicitudesDeViajesReserved/>
        </TabPanel>
        <TabPanel>
          <SolicitudesDeViajesPending/>
        </TabPanel>
        <TabPanel>
          <SolicitudesDeViajesCompleted/>
        </TabPanel>
      </TabPanels>
    </Tabs>
    
    

  )
}

export default SolicitudesDeViajes
