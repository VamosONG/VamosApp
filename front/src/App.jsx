
import { useState } from 'react'

import './App.css'
import Footer from './views/footer/footer';

import SlideEx from './views/Forms/ViewForm'

import Paginado from './components/paginado/paginadoComponent';
import LoginForm from './views/Forms/Login/Login'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

import HomeComponent from './views/home/homeCompone/home';


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
      <HomeComponent/>
      <Paginado/>

      <Footer/>
    </>
  )
}

export default App
