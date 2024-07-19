import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import styles from './Signup.module.css';

export default function Signup() {
    const [displayName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {isPending, error, signup} = useSignup();

    const handleLogin = (e) => {
        e.preventDefault();
        signup(email, password, displayName);
    };

    return (
        <form className={styles['signup-form']} onSubmit={handleLogin}>
            <h2>Sign Up</h2>
            <label>
                <span>display name:</span>
                <input
                    type='text'
                    value={displayName}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                <span>email:</span>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>confirm password:</span>
                <input
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    pattern={password}
                />
            </label>
            <button className='btn' disabled={isPending}>{isPending ? "Loading..." : "Signup"}</button>
            {error && <p>{error}</p>}
        </form>
    )
}