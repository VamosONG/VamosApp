import { UseSelector, useSelector } from "react-redux";

const Reserve = () => {

    const reserva = useSelector((state)=>state.infoConfirmacionViaje)
    return(
        <div>
          ¡Su pago ha sido procesado con exito!

          Datos de su reserva:
          Origen: {reserva.origin}
          Destino: {reserva.destination}
          Fecha: {reserva.date}
          Hora: {reserva.hora}
        </div>
    )
}

export default Reserve;