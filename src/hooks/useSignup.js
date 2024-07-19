import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import { authServer } from "../firebase/config";
import { useUserContext } from './useUserContext';

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useUserContext();

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);
        let err = null;

        try {
            const res = await createUserWithEmailAndPassword(authServer, email, password);
            if (!res) throw new Error("User not created");
            await updateProfile(res.user, { displayName });
            dispatch({type: 'LOGIN', payload: res.user})
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

    return { error, isPending, signup }
}