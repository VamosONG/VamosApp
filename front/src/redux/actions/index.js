/* import axios from 'axios'; */
import choferes from '../../utils/chofer'

//Estas constantes deben ir enotro activo llamado ACTION.TYPES.JS
export const PAGINATE="PAGINATE"
export const GET_ALL_CONDUCTORES="GET_ALL_CONDUCTORES"


/* export const getAllConductores = () => {

    try {
        console.log("pasa")
        return async (dispatch) => {
            console.log("pasa")
            const data= await choferes
            return dispatch({
                type: GET_ALL_CONDUCTORES,
                payload: data
            });
        };
    } catch (error) { */
        /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
        /* console.log(error);
    };
}; */
export const getAllConductores = ()=>(dispatch) => {
    console.log(choferes)
    dispatch ({
        type: GET_ALL_CONDUCTORES,
        payload: choferes
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
