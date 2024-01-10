import { useState } from 'react'
import './App.css'
import Footer from './views/footer/footer';
import LoginForm from './views/Forms/Login/Login'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import SlideEx from './views/Forms/ViewForm'
import NavBar from './components/navBar/navBar'

function App() {
  return (
    <>
      {/* Boton para mostrar formularios de registro (DEBERIA ESTAR INCLUIDO EN EL NAVBAR) */}
      <SlideEx/>
    <NavBar/>
      <button><Link to='/login' >Login</Link></button>
      
      <Routes>
        <Route path='/login' Component={LoginForm}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
