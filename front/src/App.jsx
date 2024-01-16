
import { useState } from 'react'
import './App.css'

import Footer from './views/footer/footer';
import Paginado from './components/paginado/paginadoComponent';
import LoginForm from './views/Forms/Login/Login'
import HomeComponent from './views/home/homeCompone/home';
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
import DetailChofer from './views/detailChofer/DetailChofer';
import Product from './components/product/Product';
// Hooks
import {Routes, Route} from 'react-router-dom'
import SolicitudViajeForm from './views/Forms/SolicitudViaje/SolicitudViajeForm';
import SolicitudesDeViajes from './components/solicitudes/solicitudesDeViajes';
import Solicitud from './components/solicitudes/solicitud';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar/>


      <Routes>
        <Route path='/home' element={<LoginForm/>}/>
        <Route path= '/about' element={<About/>} />
        <Route path= '/solicitarViaje' element={<SolicitudViajeForm/>} />
        <Route path= '/solicitudesDeViajes' element={<SolicitudesDeViajes/>} />
        <Route path='/detail' element={<DetailChofer/>}/>
        <Route path='/solicitud' element={<Solicitud/>}/>
        <Route path='/product' element={<Product/>}/>

      </Routes>
      <HomeComponent/>
      {/* <Paginado/> */}

      <Footer/>
    </>
  )
}

export default App
