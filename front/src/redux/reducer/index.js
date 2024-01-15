import { CREATE_CHOFER, GET_ALL_CONDUCTORES, ID_SOLICITUD, LOGIN, LOGOUT, NEW_USER, PAGINATE, POST_NEW_VIAJE } from "../actions/index";


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

        /* return {
            ...state,
            solicitudesDeViajes: [...state.solicitudesDeViajes, action.payload]
        } */
        case ID_SOLICITUD:
            return {
                ...state,
                idSolicitud: action.payload
            }

        //Creando nuevo chofer
        case CREATE_CHOFER: 
        return {
            ...state,
            conductores: action.payload
        }

        default:
            return { ...state };
    }
}
export default reducer