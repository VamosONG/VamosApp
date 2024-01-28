import { useDispatch, useSelector } from "react-redux"

import {
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from '@chakra-ui/react'

import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Solicitud from "./solicitud"


import { getCanceledTrips, getPendingTrips, getReservedTrips, idDeSolicitud, orderSearch } from "../../redux/actions"
import { useEffect, useState } from "react"
import SolicitudesDeViajesReserved from "./solicitudesDeViajesReserved"
import SolicitudesDeViajesPending from "./solicitudesDeViajesPending"
import SolicitudesDeViajesCompleted from "./solicitudesDeViajesCompleted"




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
    

      <Tabs isFitted variant="enclosed" marginTop={'0'} bg="gray.200" borderRadius="md">        
      <TabList mb="1em" >
        <Tab _selected={{ color: 'white', bg: '#E83D6F' }}>Viajes sin conductor asignado</Tab>
        <Tab _selected={{ color: 'white', bg: '#E83D6F' }}>Viajes con conductor asignado</Tab>
        <Tab _selected={{ color: 'white', bg: '#E83D6F' }}>Viajes concretados</Tab>

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
