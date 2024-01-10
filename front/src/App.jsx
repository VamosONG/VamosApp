import './App.css'
import Footer from './views/footer/footer';
import SlideEx from './views/Forms/ViewForm'
import NavBar from './components/navBar/navBar'

function App() {
  return (
    <>
      {/* Boton para mostrar formularios de registro (DEBERIA ESTAR INCLUIDO EN EL NAVBAR) */}
      <SlideEx/>
      <NavBar/>
      <Footer/>
    </>
  )
}

export default App
