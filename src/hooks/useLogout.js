import { signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import { authServer } from "../firebase/config";
import { useUserContext } from './useUserContext';

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useUserContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);
        let err = null;

        try {
            await signOut(authServer);
            dispatch({type: 'LOGOUT'})
        } catch (error) {
            console.error(error);
            err = error.message;
        }

        if (!isCancelled) {
            setIsPending(false);
            setError(err);
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, logout }
}