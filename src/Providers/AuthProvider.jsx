import { createContext ,useEffect,useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config.js";

 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth ,email ,password);
    }

    const singInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, userAuth=>{
            
            setUser(userAuth);
            setLoading(false);
            console.log('consoleing user auth ', userAuth );
        })
        return ()=>{
            unsubscribe();
        }
        


        },[])

    const authinfo = {user, createUser, singInUser,logOut, loading}
  
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