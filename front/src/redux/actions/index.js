import axios from 'axios';
import choferes from '../../utils/chofer'
import Swal from 'sweetalert2'

//Estas constantes deben ir enotro activo llamado ACTION.TYPES.JS
export const PAGINATE = "PAGINATE"
export const GET_ALL_CONDUCTORES = "GET_ALL_CONDUCTORES"
export const POST_NEW_VIAJE = "POST_NEW_VIAJE"
export const LOGIN = "LOGIN"
export const ID_SOLICITUD = "ID_SOLICITUD"
export const GET_SOLICITUDES= "GET_SOLICITUDES"
export const NEW_USER = 'NEW_USER'
export const LOGOUT = 'LOGOUT'
export const CREATE_CHOFER = 'CREATE_CHOFER'


export const getAllConductores = () => (dispatch) => {
    //console.log(choferes)
    dispatch({
        type: GET_ALL_CONDUCTORES,
        payload: choferes
    });
}

export const createNewChofer = (data) => {
    console.log('data en actiopn' + data);
    return async (dispatch) => {
        try {
            return dispatch({
                type: CREATE_CHOFER,
                payload: data
            })
        } catch (error) {
            alert('¡Error en la craecion de chofer!');
            throw new Error(error);
        }
    }
}

export const postNewViaje = (infoViaje) => {
    /* window.alert("se solicitó un nuevo viaje")
    
    return ({
        type: POST_NEW_VIAJE,
        payload: infoViaje
    }); */
    console.log(infoViaje)
    /* const info={
        "userId": "a66bde7e-6716-4da0-b1b0-c84e3fb0298c",
        "date": "2024-03-10",
        "hour": "12:30",
        "origin": "Origen Ejemplo",
        "destination": "Destino Ejemplo",
        "quantityPassengers": 3
      } */
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3001/offer/create`, infoViaje);
            /* console.log(data); */
            window.alert('¡solicitud creada con éxito!');
            console.log(data)
            return dispatch({
                type: POST_NEW_VIAJE,
                payload: infoViaje
            })

        } catch (error) {
            window.alert('¡Error en la solicitud!');
            throw new Error(error);
        }
    }
}

export const getSolicitudes = () =>{
    return async(dispatch)=> {
        const endpoint= 'http://localhost:3001/trips'
        try {
            const {data}= await axios.get(endpoint)
            console.log(data);
            return dispatch({
                type: GET_SOLICITUDES,
                payload: data
            })
        } catch (error) {
            console.log(error);
            alert("error")
        }
    }
    }
   
/* export const getAllConductores=()=>{
    try {

        return async (dispatch)=>{
            const data= choferes
            console.log(data)
            return dispatch({
                type:GET_ALL_CONDUCTORES,
                payload:data
            })
        }
    } catch (error) {
        console.log(error);
    }
    
}
 */


export const postNewUser = (form) => {
    console.log(form);
    return async (dispatch) => {
        try {
            return dispatch({
                type: NEW_USER,
                payload: form
            })
        } catch (error) {
            console.error("Error en la creacion del usuario:", error);
            throw error;
        }
    }

}

export const paginateConductores = (order) => {

    return async (dispatch) => {
        try {

            dispatch({
                type: PAGINATE,
                payload: order
            })
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
        };
    };
};

export const logIn = (input) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: LOGIN,
                payload: input
            })
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
        };
    };
};

export const idDeSolicitud = (id) => {
    return ({
        type: ID_SOLICITUD,
        payload: id
    })

};

export const logOutAction = (value) => {
    return {
        type: LOGOUT,
        payload: value
    };
}



