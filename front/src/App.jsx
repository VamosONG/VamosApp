
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
import ReserveComfirmed from './views/Reserve/ReserveConfirmed';
import ReserveReject from './views/Reserve/ReserveReject';
import ReviewAndReseña from './components/ReviewAndReseña/reviewAndReseña';
import PaymentStatus from './views/payments/paymentStatus';

import EditPrices from './components/editPrices/editPricesComponent';


import RegistroForm from './views/Forms/Registro/Registro';
import UserProfile from './components/userProfile/userProfile'
import AdminProfile from './components/userProfile/adminProfile';
import ReviewAdmin from './views/adminProfile/reviewAdmin';

import ProtectedRoutes from './utils/ProtectedRoute';
import { useSelector } from 'react-redux';

import PaymentFail from './views/payments/paymentFail';

function App() {
  const location = useLocation();
  const {currentUser} = useSelector(state => state)
  return (
    <>
    <AuthProvider>
        {location.pathname !== '/profile' && (
          <NavBar />
        )}
      <Routes>
        <Route path='/' element={<HomeComponent/>}/> 
        {/* Renderizando HomeComponent en la ruta para evitar pisar cada ves que se abre una pestaña */}
        <Route path='/home' element={<LoginForm/>}/>
        <Route path="/register" element={<RegistroForm/>}/>
        <Route path= '/about' element={<About/>} />
        <Route path='/questions' element={<Questions/>}/>

        <Route element={<ProtectedRoutes isAllowed={currentUser.admin=== false} />} >
        <Route path= '/solicitarViaje' element={<SolicitudViajeForm/>} />
        <Route path="/login" element={<LoginForm/>}/>
        <Route path='/reserve/confirmed' element={<ReserveComfirmed/>}/>
        <Route path='/reserve/rejected' element={<ReserveReject/>}/>
        <Route path='/solicitud' element={<Solicitud/>}/>
        <Route path="/profileUser" element={<UserProfile/>}/>
        
        </Route>
        {/* No son necesario estas rutas, ya que todo estara dentro el componente del admin */}
        {/* <Route path='/detail' element={<DriverTableView/>}/> */}
        <Route element={<ProtectedRoutes isAllowed={currentUser.admin=== true} />}>
        <Route path= '/solicitudesDeViajes' element={<SolicitudesDeViajes/>} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/review&reseña' element={<ReviewAndReseña/>}/>
        <Route path='/editPrices' element={<EditPrices/>}/>
        <Route path='/paymentStatus' element={<PaymentStatus/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegistroForm/>}/>
        <Route path="/profileAdmin" element={<AdminProfile/>}/>
        <Route path="/paymentFailed" element={<PaymentFail/>}/>
        </Route>

        {/* No son necesario estas rutas, ya que todo estara dentro el componente del admin */}
        {/* <Route path="/reviewAdmin" element={<ReviewAdmin/>}/>  
        <Route path="/user" element={<UserViewAdmin/>}/> */}

      </Routes>
      {/* <Paginado/> */}


      <Footer/>
    </AuthProvider>

    </>
  )
}

export default App
