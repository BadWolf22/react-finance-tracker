import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isPending, error, login} = useLogin();

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form className={styles['login-form']} onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className='btn' disabled={isPending}>{isPending ? "Loading..." : "Login"}</button>
            {error && <p>{error}</p>}
        </form>
    )
}