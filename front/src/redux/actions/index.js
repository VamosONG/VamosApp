/* import axios from 'axios'; */
import choferes from '../../utils/chofer'

//Estas constantes deben ir enotro activo llamado ACTION.TYPES.JS
export const PAGINATE="PAGINATE"
export const GET_ALL_CONDUCTORES="GET_ALL_CONDUCTORES"

export const paginateConductores = (order) => {
    const dataChofer = choferes;
    
    return async (dispatch) => {
        try {
            const data = dataChofer;
            console.log(data);
            dispatch({
                type: GET_ALL_CONDUCTORES,
                payload: data,
            })
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
        };
    };
};

export const getAllConductores = () => {
    return async (dispatch) => {
        try {
            const data = choferes;
            
            return dispatch({
                type: GET_ALL_CONDUCTORES,
                payload: data
            });
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
        };
    };
};