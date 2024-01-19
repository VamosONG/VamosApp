import { useContext, createContext, useState, useEffect } from "react";
import {auth} from "../firebase/firebase.config"

import { 
    onAuthStateChanged,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut} from "firebase/auth"


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context){
        console.log("no context");
    } else {
        return context
    }

}

export function AuthProvider ({children}){

    const [user, setUser]= useState("")
    useEffect(()=> {
        const suscribed= onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("no hay usuario login");
                setUser("")
            } else{
                setUser(currentUser)
                console.log(currentUser);
                currentUser
                
            }
        })
        return () => suscribed()
    },[])

    // const render = () => {
    //     if (!user) {
    //       return <p>No hay usuario conectado</p>
    //     } else {
    //       if (user.getCustomClaims().isAdmin) {
    //         return <p>El usuario actual es administrador</p>
    //       } else {
    //         return <p>El usuario actual no es administrador</p>
    //       }
    //     }
    //   }

 
    const register = async ( email,password) => {
        const response = await createUserWithEmailAndPassword (auth ,email, password)
        console.log(response);
    }

    const login = async(email, password) => {
        const response = await signInWithEmailAndPassword( auth ,email, password)
        console.log(response);
    }

   const loginWithGoogle = async () => {
    const responseGoogle= new GoogleAuthProvider()
    return signInWithPopup (auth, responseGoogle)
   } 

   const logOut= async () => {
    const response = await signOut(auth)
    console.log(response);
   } 
    
    return( <authContext.Provider
    value={ {
        register,
        login,
        loginWithGoogle,
        logOut,
        user,
        // render
    }}>
        {children}
    </authContext.Provider>) 
}