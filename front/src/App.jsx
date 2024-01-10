import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './views/footer/footer';
import Paginado from './components/paginado/paginadoComponent';
import LoginForm from './views/Forms/Login/Login'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import HomeComponent from './views/home/homeCompone/home';

function App() {
  

  return (
    <>
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
