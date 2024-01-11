//Home
import {useDispatch,useSelector} from "react-redux"
import { getAllConductores } from "../../../redux/actions";
import { useEffect,useState } from 'react'
import CardsComponent from "../../../components/cards/cardsComponent";

const HomeComponent=()=>{

    const dispatch= useDispatch();

    const conductoresPmostrar= useSelector((state)=>state.pageConductores);
    
    useEffect (()=>{
        dispatch(getAllConductores());
    },[conductoresPmostrar])
    
    
    return (
        <CardsComponent conductoresPmostrar={conductoresPmostrar}/>
    )
} 
export default HomeComponent;