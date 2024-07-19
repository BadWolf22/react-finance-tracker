import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useUserContext } from '../../hooks/useUserContext';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { user } = useUserContext();
    const { logout } = useLogout();
    const isSignedIn = user != null;

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}><Link to="/">My Finance Tracker</Link></li>
                {!isSignedIn && <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </>}
                {isSignedIn && <>
                    <li><Link to="/">{user.displayName ?? user.email}</Link></li>
                    <li><button className='btn' onClick={logout}>Logout</button></li>
                </>}
            </ul>
        </nav>
    )
}