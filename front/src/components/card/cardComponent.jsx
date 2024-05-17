function CardComponent({conductor}) {
  
    const {dni,nombre,apellido,aeropuertoOrigen}= conductor;
  
    return (
  
      <div >
        
            <p>Nombre: {nombre}</p>
            <p>dni: {dni}</p>
            <p>apellido: {apellido}</p>
            <p>aeropuertoOrigen: {aeropuertoOrigen}</p>
           
      </div>
      
    )
  }
  
  export default CardComponent;