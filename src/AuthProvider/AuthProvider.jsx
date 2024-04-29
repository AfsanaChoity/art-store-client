import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user login
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        setUser,
        loginUser,
        googleLogin,
    }
    

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;