import { useSelector } from "react-redux"




function SolicitudesDeViajes() {
  
    const solicitudesDeViajes=useSelector((state)=>state.solicitudesDeViajes)
    console.log(solicitudesDeViajes)
    return (
  
      <div >
        <ul>

           {solicitudesDeViajes.map((solicitud)=>(
                <li>{solicitud}</li>
           ))}
        </ul>
      </div>
      
    )
  }
  
export default SolicitudesDeViajes