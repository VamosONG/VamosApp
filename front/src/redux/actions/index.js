/* import axios from 'axios'; */
import choferes from '../../utils/chofer'

export const PAGINATE="PAGINATE"
export const GET_ALL_CONDUCTORES="GET_ALL_CONDUCTORES"

export const paginateConductores = (order) => {
    console.log(order);
    return async (dispatch) => {
        try {
            return dispatch({
                type: PAGINATE,
                payload: order,
            });
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
        };
    };
};

export const getAllConductores = () => {
    return async (dispatch) => {
        try {
            const data= await choferes
            
            return dispatch({
                type: GET_ALL_CONDUCTORES,
                payload: data
            });
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
        };
    };
};