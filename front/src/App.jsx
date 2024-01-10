import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './views/landing/landingComponent'
import LoginForm from './views/Forms/Login/Login'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <button><Link to='/login' >Login</Link></button>
      
      <Routes>
        <Route path='/login' Component={LoginForm}/>
        <Route path= '/about' element={<About/>} />
      </Routes>
      
    </>
  )
}

export default App
