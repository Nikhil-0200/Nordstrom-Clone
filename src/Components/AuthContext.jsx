import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) =>{

    const [isAuth, setIsAuth] = useState({
        loggedInStatus: false,
        token: null,
    })

    useEffect(()=>{
        const userName = JSON.parse(localStorage.getItem("userName"));
        if(userName){
            setIsAuth({
                loggedInStatus: true,
                token: userName[0],
            })
        }
    }, [])

    const Login = (token) =>{
        setIsAuth({
            loggedInStatus: true,
            token: token
        });
        localStorage.setItem("userName", JSON.stringify([token]))
    }

    const Logout = () =>{
        setIsAuth({
            loggedInStatus: false,
            token: null,
        })

        localStorage.removeItem("userName")
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