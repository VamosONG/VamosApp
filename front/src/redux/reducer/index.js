import {GET_ALL_CONDUCTORES, PAGINATE} from "../actions";


const initialState = {
    conductores: [],
    pageConductores: [],
    currentPage: 0,
    
}


export const reducer=(state=initialState,action)=>{
    const cantConductoresPorPag= 6;
    switch (action.type){
        case GET_ALL_CONDUCTORES:
            return {
                ...state,
                conductores:action.payload,
                pageConductores:state.conductores.splice(0, state.cantConductoresPorPag),
                conductores: action.payload,
                pageConductores: [...action.payload].splice(0, cantConductoresPorPag)
            };
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? nextPage * state.cantConductoresPorPag : prevPage * state.cantConductoresPorPag;
            console.log(action.payload)
            console.log(firstIndex)
            console.log(nextPage)

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
        default:
            return {...state};
    }
}
