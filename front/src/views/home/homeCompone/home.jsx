//Home
import {useDispatch,useSelector} from "react-redux"
import { getAllConductores } from "../../../redux/actions";
import { useEffect,useState } from 'react'

const HomeComponent=()=>{

    const dispatch= useDispatch();

    useEffect (()=>{
        dispatch(getAllConductores());
      },[dispatch])

      return (
        <div></div>
      )



}
export default HomeComponent;