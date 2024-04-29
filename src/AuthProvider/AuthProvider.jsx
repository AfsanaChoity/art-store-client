import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo

        })

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

    //github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    //logout
    const logout = () =>{
        setUser(null)
        signOut(auth)
    }

     //observer
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);


        });
        return () => unsubscribe();

    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        setUser,
        loginUser,
        googleLogin,
        githubLogin,
        logout,
        updateUserProfile,
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