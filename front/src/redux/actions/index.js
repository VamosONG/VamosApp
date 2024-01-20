import axios from 'axios';
import choferes from '../../utils/chofer'

import { DELETE_DRIVER,GET_TRIP_ID, DRIVER_STATE, FILTER_AIRPORT, FILTER_CAR, ORDER_ALPHABETICAL, ORDER_PASSENGER, ORDER_RATING, UPDATE_DRIVER_DATA, FILTER_STATE, ORDER_STATE } from './action.types';

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
export const GET_TRIPS_BY_ID = 'GET_TRIPS_BY_ID'
export const POST_REVIEW = 'POST_REVIEW'

export const GET_ALL_PRICES = 'GET_ALL_PRICES'

export const USER_BY_EMAIL = 'USER_BY_EMAIL'



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

export const getTripById = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/trips/${id}`)
            return dispatch({
                type:GET_TRIP_ID,
                payload: data
            })
        } catch (error) {
            throw error
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

// export const updateDriverData = (id, newData) => {
//     return async (dispatch) => {
//         try {
//             dispatch({
//                 type: UPDATE_DRIVER_DATA,
//                 payload: data
//             })
//         } catch (error) {
//             console.error({message: 'Error en action', error});
//         }
//     }
// }

export const postNewViaje = (infoViaje) => {

    infoViaje.userId= "c9f86a72-c6b4-4ac2-9b31-0d8eaee8b23b"
    //infoViaje.userId= "74c99ae0-61f9-4d85-bcb6-fcf680183c48" //(con permisos de admin)
    console.log(infoViaje)
    return async (dispatch) => {
        try {

            /* const { data } = await axios.post(`https://vamosappserver.onrender.com/offer/create`, infoViaje); */

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
    console.log(order);
    return async (dispatch) => {
        try {
            dispatch({
                type: PAGINATE,
                payload: order
            })
        } catch (error) {
            throw new Error(error);
            //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
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

export const alphabeticalOrder = (order) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_ALPHABETICAL,
                payload: order
            });
        } catch (error) {
            throw new Error(error);
        };
    };
};

export const passengerOrder = (data) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_PASSENGER,
                payload: data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const ratingOrder = (data) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_RATING,
                payload: data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const stateOrder = (data) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_STATE,
                payload: data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const carFilter = (data) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_CAR,
                payload: data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const airportFilter = (data) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_AIRPORT,
                payload: data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const stateFilter = (data) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_STATE,
                payload: data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}


export const getTripsById = (id) => {
    console.log(id)
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/trips/tripId/${id}`)
            console.log(data)
            return dispatch({
                type: GET_TRIPS_BY_ID,
                payload: data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
export const postReview = (info) => {
    /* info.driverId='46d639a7-5468-495b-b9a7-f666517d3bfb' */
    console.log(info)
    return async (dispatch) => {
        const { data } = await axios.post(`http://localhost:3001/reviews/create`, info);
        console.log(data)
        try {
            return dispatch({
                type: POST_REVIEW,
                payload: data
            })
        } catch (error) {
           /*  throw new Error(error); */
           console.log(error.message)
        }
    }
}

// export const driverState = (data) => {
//     return async (dispatch) => {
//         try {
//             return dispatch({
//                 type: DRIVER_STATE,
//                 payload: data
//             })
//         } catch (error) {
//             throw new Error(error);
//         }
//     }
// }
export const getUserByEmail = (email) => {
    console.log(email)
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3001/user/email`, email);
            console.log(data)
            dispatch({
                type: USER_BY_EMAIL,
                payload: data
            })
        } catch (error) {
            /* throw new Error(error.response.data.error); */  //COMENTADO HASTA QUE RECIBA ALGO DEL BACK
            console.log(error.message)
        }
    };
};

export const getAllPrices = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/prices`);
            dispatch({
                type: GET_ALL_PRICES,
                payload: data
            });
            return data
        } catch (error) {
            console.error('Error al obtener precios:', error);
            throw error;
        }
    }

}


export const updatePrice = (info) => {
    console.log(info)
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3001/price/update`, info);
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