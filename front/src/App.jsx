
import { useState } from 'react'
import './App.css'

import Footer from './views/footer/footer';
import Paginado from './components/paginado/paginadoComponent';
import LoginForm from './views/Forms/Login/Login'
import HomeComponent from './views/home/homeCompone/home';
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
// Hooks
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar/>


      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path= '/about' element={<About/>} />
      </Routes>
      <HomeComponent/>
      {/* <Paginado/> */}

      <Footer/>
    </>
  )
}

export default App
