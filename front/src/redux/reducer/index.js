import { DELETE_DRIVER } from "../actions/action.types";
import { CREATE_CHOFER, GET_ALL_CONDUCTORES, GET_FILTERED, GET_SOLICITUDES, ID_SOLICITUD, LOGIN, LOGOUT, NEW_USER, PAGINATE, POST_NEW_VIAJE } from "../actions/index";


const initialState = {
    conductores: [],
    pageConductores: [],
    currentPage: 0,
    newUsuario: [],
    cantConductoresPorPag: 6,

    esAdmin: false,
    esUsuario: false,

    solicitudesDeViajes: [],
    idSolicitud: '',

    infoConfirmacionViaje:{},

    conductoresFiltrados:[]

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CONDUCTORES:
            //console.log(action.payload)
            return {
                ...state,
                conductores: action.payload,
                pageConductores: state.conductores.splice(0, state.cantConductoresPorPag),
            };
        
        case DELETE_DRIVER:
            return {
                ...state, 
                conductores: state.conductores.filter(driver => driver.id !== action.payload)
            }
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? nextPage * state.cantConductoresPorPag : prevPage * state.cantConductoresPorPag;
            // console.log(action.payload)
            // console.log(firstIndex)
            // console.log(nextPage)

            /* if (action.payload === 'next' && firstIndex >= state.pageConductores.length) {
                return state
            } else if (action.payload === "prev" && prevPage < 0) {
                return state
            }; */

            return {
                ...state,
                pageConductores: /* [...state.pageConductores] */state.conductores.splice(firstIndex, state.cantConductoresPorPag),
                currentPage: action.payload === "next" ? nextPage : prevPage,
            };

        case LOGIN:
            if (action.payload.email === 'asd' && action.payload.password === '123') {
                return {
                    ...state,
                    esAdmin: true
                }
            } else {
                return {
                    ...state,
                    esUsuario: true
                }
            }

        //BTN de salida o cerrar sesion
        case LOGOUT:
            const value = action.payload;

            if (value === 'admin') {
                return {
                    ...state,
                    esAdmin: false
                }
            } else if (value === 'user') {
                return {
                    ...state,
                    esUsuario: false
                }
            }
        //Creando un nuevo usuario
        case NEW_USER:
            return {
                ...state,
                newUsuario: [action.payload]
            }

        case POST_NEW_VIAJE: 
            console.log(action.payload)
            return {
            ...state,
            infoConfirmacionViaje: action.payload
        }
        
        case GET_SOLICITUDES:
            return {
                ...state,
                solicitudesDeViajes: action.payload
            }

        case ID_SOLICITUD:
            return {
                ...state,
                idSolicitud: action.payload
            }
        case GET_FILTERED:
            return {
                ...state,
                conductoresFiltrados: action.payload
            }
        default:
            return { ...state };
    }
}
export default reducer