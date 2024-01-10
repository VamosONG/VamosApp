import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './views/footer/footer';
import LoginForm from './views/Forms/Login/Login'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button><Link to='/login' >Login</Link></button>
      
      <Routes>
        <Route path='/login' Component={LoginForm}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
