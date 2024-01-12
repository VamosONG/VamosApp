import { useDispatch } from "react-redux";
import { postNewViaje } from "../../../redux/actions";
import { useState } from "react";


function SolicitudViajeForm() {

    const dispatch= useDispatch();

    const [input,setInput]=useState({
        origen:"",
        destino:"",
        fecha:"",
        hora:"",
        cantPasajeros:""
      });
  
    const handleSubmit=async()=>{
        event.preventDefault();
        await dispatch(postNewViaje(input));
    }
  
    return (
  
      <div >
        <form onSubmit={handleSubmit}>
            <select>
                    <option value="" disabled selected >Desde</option>
                    
                     <option value="Aeropuerto Talara">Aeropuerto Talara</option>
                     <option value="Aeropuerto Tumbes">Aeropuerto Tumbes</option>
                     <option value="Zona 1">Zona 1</option>
                     <option value="Zona 2">Zona 2</option>
                     <option value="Zona 3">Zona 3</option>
                     <option value="Zona 4">Zona 4</option>
            </select>
            <select>
                    <option value="" disabled selected >Hacia</option>
                    
                     <option value="Aeropuerto Talara">Aeropuerto Talara</option>
                     <option value="Aeropuerto Tumbes">Aeropuerto Tumbes</option>
                     <option value="Zona 1">Zona 1</option>
                     <option value="Zona 2">Zona 2</option>
                     <option value="Zona 3">Zona 3</option>
                     <option value="Zona 4">Zona 4</option>
            </select>
            <div>
                <label>Fecha de recojida</label>
                <input 
                    placeholder='--/--/----' 
                    name='fecha' 
                    value={input.value}/>
            </div>
            <div>
                <label>Hora de recojida</label>
                <input 
                    placeholder='--:--' 
                    name='hora' 
                    value={input.value}/>
                    
            </div>
            <div>
                <label>Cantidad de pasajeros</label>
                <input 
                    placeholder='1-20' 
                    name='cantPasajeros' 
                    value={input.value}/>
                    
            </div>
            <button type='submit' >Solicitar</button>
        </form>
      </div>
      
    )
  }
  
  export default SolicitudViajeForm