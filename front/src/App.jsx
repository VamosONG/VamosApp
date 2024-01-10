import { useState } from 'react'
import './App.css'
import Landing from './views/landing/landingComponent'
import LoginForm from './views/Forms/Login/Login'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import RegistroForm from './views/Forms/Registro/Registro'
import SlideEx from './views/Forms/ViewForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Boton para mostrar formularios de registro (DEBERIA ESTAR INCLUIDO EN EL NAVBAR) */}
      <SlideEx/>
    </>
  )
}

export default App
