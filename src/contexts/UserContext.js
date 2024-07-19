import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authServer } from "../firebase/config";

export const UserContext = createContext();

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        default:
            return state;
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: JSON.parse(localStorage.getItem("user")),
    })

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(authServer, (user) => {
            localStorage.setItem("user", JSON.stringify(user));
            if (user == null) dispatch({type: 'LOGOUT'});
        });
        return () => unsubscriber();
    }, []);

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            { children }
        </UserContext.Provider>
    );
}