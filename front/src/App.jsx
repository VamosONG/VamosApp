import { useState } from 'react'
import './App.css'
import Landing from './views/landing/landingComponent
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import SlideEx from './views/Forms/ViewForm'

function App() {
  return (
    <>
      {/* Boton para mostrar formularios de registro (DEBERIA ESTAR INCLUIDO EN EL NAVBAR) */}
      <SlideEx/>
    </>
  )
}

export default App
