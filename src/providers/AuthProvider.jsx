import { createContext, useState } from "react";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext()
export const auth = getAuth(app);  
const user = auth.currentUser;
export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    

    const unsubscribe = onAuthStateChanged(auth, (user) =>{
        if(user){
            console.log(user);   
        }
        else{
            console.log('dd');
        }
    })
    unsubscribe()


    const authInfo= {
        user,
        setUser, loading, setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;