 //import axios from 'axios';
import choferes from '../../utils/chofer'
import Swal from 'sweetalert2'

//Estas constantes deben ir enotro activo llamado ACTION.TYPES.JS
export const PAGINATE="PAGINATE"
export const GET_ALL_CONDUCTORES="GET_ALL_CONDUCTORES"
export const POST_NEW_VIAJE="POST_NEW_VIAJE"
export const LOGIN = "LOGIN"
export const NEW_USER = 'NEW_USER'




export const getAllConductores = ()=>(dispatch) => {
    //console.log(choferes)
    dispatch ({
        type: GET_ALL_CONDUCTORES,
        payload: choferes
    });
}

const cont=0;
export const postNewViaje = (infoViaje) => {
    window.alert("se solicitó un nuevo viaje")
    infoViaje.id=cont+1
    return ({
        type: POST_NEW_VIAJE,
        payload: infoViaje
    });
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
            return dispatch ({
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


