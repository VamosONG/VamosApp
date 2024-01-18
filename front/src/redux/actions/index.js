import axios from 'axios';
import choferes from '../../utils/chofer'

import { DELETE_DRIVER, UPDATE_DRIVER_DATA } from './action.types';

//Estas constantes deben ir enotro activo llamado ACTION.TYPES.JS
export const PAGINATE = "PAGINATE"
export const GET_ALL_CONDUCTORES = "GET_ALL_CONDUCTORES"
export const POST_NEW_VIAJE = "POST_NEW_VIAJE"
export const LOGIN = "LOGIN"
export const ID_SOLICITUD = "ID_SOLICITUD"
export const GET_RESERVED_TRIPS = "GET_RESERVED_TRIPS"
export const GET_PENDING_TRIPS = "GET_PENDING_TRIPS"
export const GET_COMPLETED_TRIPS = "GET_COMPLETED_TRIPS"
export const NEW_USER = 'NEW_USER'
export const LOGOUT = 'LOGOUT'
export const CREATE_CHOFER = 'CREATE_CHOFER'
export const VIAJE_CONFIRMADO = 'VIAJE_CONFIRMADO'
export const GET_FILTERED = 'GET_FILTERED'


export const getAllConductores = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/drivers`);
            dispatch({
                type: GET_ALL_CONDUCTORES,
                payload: data
            });
            return data
        } catch (error) {
            console.error('Error al obtener conductores:', error);
            throw error;
        }
    }


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

export const deleteDriverAction = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(`http://localhost:3001/drivers/${id}`)
            dispatch({
                type: DELETE_DRIVER,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const updateDriverData = (id, newData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_DRIVER_DATA,
                payload: data
            })
        } catch (error) {
            console.error({message: 'Error en action', error});
        }
    }
}

export const postNewViaje = (infoViaje) => {

    infoViaje.userId= "3027b2fa-4997-4068-9f6d-c847baa02291"

    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3001/offer/create`, infoViaje);
            console.log(data)
            await dispatch({
                type: POST_NEW_VIAJE,
                payload: data
            })

        } catch (error) {
            window.alert('¡Error en la solicitud!');
            /* throw new Error(error); */
            console.log(error.message)
        }
    }
}

export const getReservedTrips = () =>{
    return async(dispatch)=> {
        const endpoint= 'http://localhost:3001/trips/reserves' //Se cambió a la ruta con viajes reservados
        try {
            const { data } = await axios.get(endpoint)
            console.log(data);
            return dispatch({
                type: GET_RESERVED_TRIPS,
                payload: data
            })
        } catch (error) {
            console.log(error);
            alert("error")
        }
    }
}
export const getPendingTrips = () =>{
    return async(dispatch)=> {
        const endpoint= 'http://localhost:3001/trips/pending' //ruta con viajes pendientes
        try {
            const { data } = await axios.get(endpoint)
            console.log(data);
            return dispatch({
                type: GET_PENDING_TRIPS,
                payload: data
            })
        } catch (error) {
            console.log(error);
            alert("error")
        }
    }
}
export const getCanceledTrips = () =>{
    return async(dispatch)=> {
        const endpoint= 'http://localhost:3001/trips/completed' //ruta con viajes completados
        try {
            const { data } = await axios.get(endpoint)
            console.log(data);
            return dispatch({
                type: GET_COMPLETED_TRIPS,
                payload: data
            })
        } catch (error) {
            console.log(error);
            alert("error")
        }
    }
}


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

export const viajeConfirmado = (info) => {
    console.log(info)
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3001/trips/reserves/create`, info);
            console.log(data)
            dispatch({
                type: VIAJE_CONFIRMADO,
                payload: data
            })
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
            console.log(error.message)
        };
    };
};

export const filtrarConductores = (info) => {
    console.log(info)
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3001/drivers/filter`, info);
            console.log(data)
            dispatch({
                type: GET_FILTERED,
                payload: data
            })
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
            console.log(error.message)
        };
    };
};
export const conductorAsignado = (info) => {
    console.log(info)
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3001/trips/reserves/update`, info);
            console.log(data)
            /* dispatch({
                type: GET_FILTERED,
                payload: data
            }) */
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
            console.log(error.message)
        };
    };
};



