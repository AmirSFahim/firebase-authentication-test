import { createContext ,useEffect,useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config.js";

 export const AuthContext = createContext(null)

const googleAuth = new GoogleAuthProvider();

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
    const googlePopUp = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleAuth)
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

    const authinfo = {user, createUser, singInUser,logOut, loading, googlePopUp}
  
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