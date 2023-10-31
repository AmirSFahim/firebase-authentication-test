import { createContext ,useEffect,useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config.js";

 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth ,email ,password)
    }

    const singInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =() =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, userAuth=>{
            
            setUser(userAuth);
            console.log('consoleing user auth ', userAuth );
        })
        return ()=>{
            unsubscribe();
        }
        


        },[])

    const authinfo = {user, createUser, singInUser,logOut}
  
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        
        </AuthContext.Provider>
            
        
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;