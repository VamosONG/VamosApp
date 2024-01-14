import axios from 'axios';
import choferes from '../../utils/chofer'

//Estas constantes deben ir enotro activo llamado ACTION.TYPES.JS
export const PAGINATE="PAGINATE"
export const GET_ALL_CONDUCTORES="GET_ALL_CONDUCTORES"
export const POST_NEW_VIAJE="POST_NEW_VIAJE"
export const LOGIN="LOGIN"
export const ID_SOLICITUD="ID_SOLICITUD"




export const getAllConductores = ()=>(dispatch) => {
    //console.log(choferes)
    dispatch ({
        type: GET_ALL_CONDUCTORES,
        payload: choferes
    });
}


export const postNewViaje = (infoViaje) => {
    /* window.alert("se solicitó un nuevo viaje")
    
    return ({
        type: POST_NEW_VIAJE,
        payload: infoViaje
    }); */
    return async (dispatch)=>{
        try {
            const {data}= await axios.post(`http://localhost:3001/offer/create`,infoViaje);
            /* console.log(data); */
            window.alert('¡solicitud creada con éxito!');
            console.log(data)
            /* return dispatch({
                            type:POST_NEW_VIAJE,
                            payload:data
            }) */
        
        } catch (error) {
        window.alert('¡Error en la solicitud!');
        throw new Error(error);
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
    
    
            return({
                type: ID_SOLICITUD,
                payload: id
            })
        
};




