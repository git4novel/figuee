import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext = createContext(null);
export const auth = getAuth(app)

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    // const [user, setUser] = useState(null)
    const [currentUser, setCurrentUser] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null)
    

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) =>{
            setCurrentUser(user);
            setName(user?.displayName);
            setEmail(user?.email)
            setLoading(false);
        })
        return () =>{
            unsubscribe();
          }
    }, [])

    return (
        <AuthContext.Provider value={{
            currentUser, setCurrentUser, setLoading,
            loading, photo, setPhoto, name, setName, email, setEmail
          }}>
            {children}
          </AuthContext.Provider>
    );
};

export default AuthProvider;