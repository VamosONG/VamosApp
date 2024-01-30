
import { useState } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom';

import Footer from './views/footer/footer';
import Paginado from './components/paginado/paginadoComponent';
import LoginForm from './views/Forms/Login/Login'
import HomeComponent from './views/home/homeCompone/home';
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
import Questions from './views/questions/questions';

import Product from './components/product/Product';
// Hooks
import {Routes, Route} from 'react-router-dom'
import SolicitudViajeForm from './views/Forms/SolicitudViaje/SolicitudViajeForm';
import SolicitudesDeViajes from './components/solicitudes/solicitudesDeViajes';
import Solicitud from './components/solicitudes/solicitud';
import { AuthProvider } from './context/authContext';

import DriverTableView from './views/driversViewAdmin/driverTable';
import ReviewAndReseña from './components/ReviewAndReseña/reviewAndReseña';
import PaymentStatus from './views/payments/paymentStatus';

import EditPrices from './components/editPrices/editPricesComponent';


import RegistroForm from './views/Forms/Registro/Registro';
import UserProfile from './components/userProfile/userProfile'
import AdminProfile from './components/userProfile/adminProfile';
import ReviewAdmin from './views/adminProfile/reviewAdmin';
import UserViewAdmin from './views/adminProfile/userViewAdmin';
import ProtectedRoutes from './utils/ProtectedRoute';
import { useSelector } from 'react-redux';

import PaymentFail from './views/payments/paymentFail';



function App() {

  const {currentUser} = useSelector(state => state)
  return (
    <>
    <AuthProvider>
          <NavBar />
      
      <Routes>
        <Route path='/' element={<HomeComponent/>}/> 
        {/* Renderizando HomeComponent en la ruta para evitar pisar cada ves que se abre una pestaña */}
        <Route path='/home' element={<LoginForm/>}/>
        <Route path="/register" element={<RegistroForm/>}/>
        <Route path= '/about' element={<About/>} />
        <Route path='/questions' element={<Questions/>}/>
        <Route path="/paymentFailed" element={<PaymentFail/>}/>
        <Route path='/paymentStatus' element={<PaymentStatus/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path= '/solicitarViaje' element={<SolicitudViajeForm/>} />

        {
          currentUser.id &&
          <>
          <Route element={<ProtectedRoutes isAllowed={currentUser?.admin=== false} />} > 
          <Route path="/profileUser" element={<UserProfile/>}/>
          <Route path='/review&reseña' element={<ReviewAndReseña/>}/>
           </Route> 

          <Route element={<ProtectedRoutes isAllowed={currentUser?.admin=== true} />}> 
          <Route path='/solicitud' element={<Solicitud/>}/>
          <Route path= '/solicitudesDeViajes' element={<SolicitudesDeViajes/>} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/editPrices' element={<EditPrices/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegistroForm/>}/>
          <Route path="/profileAdmin" element={<AdminProfile/>}/>
           </Route> 
          
           </>
        }
        </Routes>

        
        {/* <Route path="/graphics" element={<Graphics/>}/> */}


        {/* No son necesario estas rutas, ya que todo estara dentro el componente del admin */}
        {/* <Route path="/reviewAdmin" element={<ReviewAdmin/>}/>  
        <Route path="/user" element={<UserViewAdmin/>}/> */}

      {/* <Paginado/> */}

      <Footer/>
    </AuthProvider>

    </>
  )
}

export default App
