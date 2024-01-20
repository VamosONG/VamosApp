
import { useState } from 'react'
import './App.css'

import Footer from './views/footer/footer';
import Paginado from './components/paginado/paginadoComponent';
import LoginForm from './views/Forms/Login/Login'
import HomeComponent from './views/home/homeCompone/home';
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'

import Product from './components/product/Product';
// Hooks
import {Routes, Route} from 'react-router-dom'
import SolicitudViajeForm from './views/Forms/SolicitudViaje/SolicitudViajeForm';
import SolicitudesDeViajes from './components/solicitudes/solicitudesDeViajes';
import Solicitud from './components/solicitudes/solicitud';
import { AuthProvider } from './context/authContext';

import { Link } from 'react-router-dom';
import DriverTableView from './views/driversViewAdmin/driverTable';
import ReserveComfirmed from './views/Reserve/ReserveConfirmed';
import ReserveReject from './views/Reserve/ReserveReject';
import ReviewAndReseña from './components/ReviewAndReseña/reviewAndReseña';
import EditPrices from './components/editPrices/editPricesComponent';

function App() {

  return (
    <>
    <AuthProvider>

      <NavBar/>

      <Routes>
        <Route path='/home' element={<LoginForm/>}/>
        <Route path= '/about' element={<About/>} />
        <Route path= '/solicitarViaje' element={<SolicitudViajeForm/>} />
        <Route path= '/solicitudesDeViajes' element={<SolicitudesDeViajes/>} />
       
        <Route path='/detail' element={<DriverTableView/>}/>
        <Route path='/solicitud' element={<Solicitud/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/reserve/confirmed' element={<ReserveComfirmed/>}/>
        <Route path='/reserve/rejected' element={<ReserveReject/>}/>

        <Route path='/review&reseña' element={<ReviewAndReseña/>}/>
        <Route path='/editPrices' element={<EditPrices/>}/>


      </Routes>
      <HomeComponent/>

      <Footer/>
    </AuthProvider>

    </>
  )
}

export default App
