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
        console.log("no context");
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
                console.log("no hay usuario login");
                setUser("")
                
            } else {
                setUser(currentUser)
                console.log(currentUser);
                currentUser
                dispatch(getUserByEmail(currentUser.email))
            }
            verificationComplete=true;
        })
        return () => suscribed()
    }, [/* auth, dispatch */])

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


    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response);
    }

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response);

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
            console.log(`"Falló el login"${error.message}`);
        }
    }
    const logOut = async () => {
        try {
            setUser()
            await signOut(auth);
            console.log('Logout exitoso');
        } catch (error) {
            console.log(`${error.message}`);
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

