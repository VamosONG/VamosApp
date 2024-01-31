import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth"
import { useNavigate } from "react-router";
import { getUserByEmail } from "../redux/actions";
import { useDispatch } from "react-redux";

// Creo un contexto para pasar datos a todos los componentes sin tener que pasar props manualmente
export const authContext = createContext();

// Creo un hook para que los componentes puedan acceder al contexto de autenticacion 
export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("no context");
    } else {
        return context
    }

}

let verificationComplete= false;

// este es el proveedor del contexto de autenticacion. Envuelve en app a todos los componentes para que puedan acceder a las funciones 
// de autenticacion a traves del contexto
export function AuthProvider({ children }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    
    //const [verificationComplete, setVerificationComplete] = useState(false);  // Estado para controlar la finalización de la verificación

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                setUser("")
                
            } else {
                setUser(currentUser)
               
                currentUser
                dispatch(getUserByEmail(currentUser.email))
            }
            verificationComplete=true;
        })
        return () => suscribed()
    }, [verificationComplete])



    const register = async (email, password) => {
       
        const response = await createUserWithEmailAndPassword(auth, email, password)
      
    }

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
       

        // Extraigo el operationType par poder pasarle al componente login.
        const { operationType, user } = response;

        // Puedes hacer más cosas aquí si es necesario

        return { operationType, user };
    }

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        try {
            const resp=await signInWithPopup(auth, responseGoogle)
        setUser(resp)
             return resp
        } catch (error) {
            throw new Error(`"Falló el login"${error.message}`);
        }
    }
    const logOut = async () => {
        try {
            setUser()
            await signOut(auth);
           
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    }

    return (<authContext.Provider
        value={{
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

export {verificationComplete};

