import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Footer from './views/footer/footer';
import LoginForm from './views/Forms/Login/Login'
import HomeComponent from './views/home/homeCompone/home';
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
import Questions from './views/questions/questions';
import Product from './components/product/Product';

// Hooks
import SolicitudViajeForm from './views/Forms/SolicitudViaje/SolicitudViajeForm';
import SolicitudesDeViajes from './components/solicitudes/solicitudesDeViajes';
import Solicitud from './components/solicitudes/solicitud';
import ReviewAndReseña from './components/ReviewAndReseña/reviewAndReseña';
import PaymentStatus from './views/payments/paymentStatus';
import EditPrices from './components/editPrices/editPricesComponent';
import RegistroForm from './views/Forms/Registro/Registro';
import UserProfile from './components/userProfile/userProfile'
import AdminProfile from './components/userProfile/adminProfile';
import ProtectedRoutes from './utils/ProtectedRoute';
import PaymentFail from './views/payments/paymentFail';
import Error from './components/Error';
import LoginViajes from './views/Forms/Login/LoginViajes';

import { AuthProvider, useAuth} from './context/authContext';
import { useSelector } from 'react-redux';
import LogOut from './views/Forms/LogOut/logout';
import { Flex, Stack } from '@chakra-ui/react';
import fondoVamos1 from '../src/assets/fondoVamos1.jpg'

function App() {
  const {currentUser} = useSelector(state=> state);
  const location = useLocation();

  return (
    <Stack
      backgroundImage={fondoVamos1}
    >
    <AuthProvider
    >
        <NavBar />
        
        <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={800}>
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
        <Route path='/loginviajes' element={<LoginViajes/>}/>
        <Route path="/register" element={<RegistroForm/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/logout" element={<LogOut/>}/>

        {
        currentUser?.id &&
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
        <Route path="/profileAdmin" element={<AdminProfile/>}/>
        </Route> 
        
        </>
        }
        </Routes>
        </CSSTransition>
        </TransitionGroup>

      <Footer/>
    </AuthProvider>

    </Stack>
  )
}
export default App

