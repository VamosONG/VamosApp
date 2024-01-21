


import { DELETE_DRIVER, GET_TRIP_ID, FILTER_AIRPORT, FILTER_CAR, ORDER_ALPHABETICAL, ORDER_PASSENGER, ORDER_RATING, FILTER_STATE, ORDER_STATE } from "../actions/action.types";




import { CLEAN_USER_BY_EMAIL, CREATE_CHOFER, GET_ALL_CONDUCTORES, GET_TRIPS_BY_ID, GET_COMPLETED_TRIPS, GET_FILTERED, GET_PENDING_TRIPS, GET_RESERVED_TRIPS, ID_SOLICITUD, LOGIN, LOGOUT, NEW_USER, PAGINATE, POST_NEW_VIAJE, USER_BY_EMAIL, GET_ALL_PRICES } from "../actions/index";





const initialState = {

    allData: [],//Este estado servidara para mantener la data general de la base de datos
    conductores: [],
    pageConductores: [],
    currentPage: 0,
    newUsuario: [],

    currentUser:{}, // este es un objeto con todas las propiedades del usuario filtrado por email

    // esAdmin: false,
    // esUsuario: false,

    viajesReservados: [],
    viajesPendientes: [],
    viajesCompletados: [],
    idSolicitud: '',

    infoConfirmacionViaje: {},

    conductoresFiltrados: [],


    tripsById:[],


    trip: [],

    allPrices:[],

}

const reducer = (state = initialState, action) => {
    const PAGE_DATA = 6;//DESDE ACA MANEJA LA CANT DE OBJETO POR PAGINA
    switch (action.type) {
        case GET_ALL_CONDUCTORES:
            return {
                ...state,
                conductores: [...action.payload].slice(0, PAGE_DATA), //Se configura asi para poder manejar el paginado.
                pageConductores: action.payload,
                allData: action.payload
            };
        case GET_TRIP_ID:
            return {
                ...state,
                trip: action.payload
            }
        case DELETE_DRIVER:
            return {
                ...state,
                conductores: state.conductores.filter(driver => driver.id !== action.payload)
            }
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? nextPage * PAGE_DATA : prevPage * PAGE_DATA;
            // console.log(action.payload)
            // console.log(firstIndex)
            // console.log(nextPage)

            if (action.payload === 'next' && firstIndex >= state.pageConductores.length) {
                return state
            } else if (action.payload === "prev" && prevPage < 0) {
                return state
            }; 

            return {
                ...state,
                // pageConductores: /* [...state.pageConductores] */state.conductores.splice(firstIndex, state.cantConductoresPorPag),
                conductores: [...state.pageConductores].splice(firstIndex, PAGE_DATA),
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

        case GET_RESERVED_TRIPS:
            return {
                ...state,
                viajesReservados: action.payload
            }
        case GET_PENDING_TRIPS:
            return {
                ...state,
                viajesPendientes: action.payload
            }
        case GET_COMPLETED_TRIPS:
            return {
                ...state,
                viajesCompletados: action.payload
            }

        case ID_SOLICITUD:
            return {
                ...state,
                idSolicitud: action.payload
            }
        case GET_FILTERED:
            return {
                ...state,
                conductoresFiltrados: action.payload,
            }
        case ORDER_ALPHABETICAL:
            let orderedList = [...state.conductores];
            if (action.payload === "A") {
                orderedList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
            } else if (action.payload === "D") {
                orderedList.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
            }
            return {
                ...state,
                conductores: orderedList.slice(0, PAGE_DATA),
                pageConductores: orderedList
            }

        case ORDER_PASSENGER:
            let orderedListPassenger = [...state.conductores];
            if (action.payload === 'A') {
                orderedListPassenger.sort((a, b) => a.capacityPassengers < b.capacityPassengers ? 1 : -1)
            } else if (action.payload === 'D') {
                orderedListPassenger.sort((a, b) => a.capacityPassengers > b.capacityPassengers ? 1 : -1)
            }
            return {
                ...state,
                conductores: orderedListPassenger.slice(0, PAGE_DATA),
                pageConductores: orderedListPassenger
            }

        case ORDER_RATING:
            let orderedListRating = [...state.conductores]
            if (action.payload === 'A') {
                orderedListRating.sort((a, b) => a.rating < b.rating ? 1 : -1)
            } else if (action.payload === 'D') {
                orderedListRating.sort((a, b) => a.rating > b.rating ? 1 : -1)
            }
            return {
                ...state,
                conductores: [...orderedListRating],
                pageConductores: orderedListRating
            }

        case FILTER_CAR:
            const filterCarList = state.allData.filter((car) => car.carType === action.payload)
            return {
                ...state,
                conductores: [...filterCarList].slice(0, PAGE_DATA),
                pageConductores: filterCarList
            }

        case FILTER_AIRPORT:
            const filterAirportList = state.allData.filter((zone) => zone.airports === action.payload)

            return {
                ...state,
                conductores: [...filterAirportList].slice(0, PAGE_DATA),
                pageConductores: filterAirportList
            }

        case FILTER_STATE:
            let filterStateList = [...state.allData]
            if (action.payload === true || action.payload === 'true') {
                filterStateList = state.allData.filter((mood) => mood.driverState === true)
            } else if (action.payload === false || action.payload === 'false') {
                filterStateList = state.allData.filter((mood) => mood.driverState === false)
            } else {
                filterStateList
            }

            // const filterStateList = state.allData.filter((mood) => mood.driverState === true)

            return {
                ...state,
                conductores: [...filterStateList].slice(0, PAGE_DATA),
                pageConductores: filterStateList
            }

        case ORDER_STATE:
            let orderedListState = [...state.conductores]
            if (action.payload === 'A') {
                orderedListState.sort((a, b) => a.driverState < b.driverState ? 1 : -1)
            } else if (action.payload === 'D') {
                orderedListState.sort((a, b) => a.driverState > b.driverState ? 1 : -1)
            }
            return {
                ...state,
                conductores: [...orderedListState],
                pageConductores: orderedListState
            }

        case GET_TRIPS_BY_ID:
            return {
                ...state,
                tripsById: action.payload
            }
        case GET_ALL_PRICES:
            return {
                ...state,
                allPrices: action.payload
            }
        /* case POST_REVIEW:
            return {
                ...state,
                tripsById: action.payload
            } */
            case USER_BY_EMAIL:
                return {
                    ...state,
                    currentUser: action.payload
                }
            case CLEAN_USER_BY_EMAIL:
                return{
                    ...state,
                    currentUser: action.payload
                }

        default:
            return { ...state };
    }
}
export default reducer
