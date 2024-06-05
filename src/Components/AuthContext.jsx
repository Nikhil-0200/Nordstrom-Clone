import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) =>{

    const [isAuth, setIsAuth] = useState({
        loggedInStatus: false,
        token: null,
    })

    const Login = (token) =>{
        setIsAuth({
            loggedInStatus: true,
            token: token
        })
    }

    const Logout = () =>{
        setIsAuth({
            loggedInStatus: false,
            token: null,
        })
    }

    const sendData = {
        isAuth, Login, Logout
    }


    return(
        <AuthContext.Provider value={sendData}>
            {props.children}
        </AuthContext.Provider>
    )
}