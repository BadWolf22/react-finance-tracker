import { useEffect, useState } from 'react';
import styles from './TransactionForm.module.css';
import { useFirestore } from '../../hooks/useFirestore';
import { useUserContext } from '../../hooks/useUserContext';

export default function TransactionForm() {
    const { user } = useUserContext();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const { addDocument, response } = useFirestore(user.uid);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDocument({name, amount});
    };

    useEffect(() => {
        if (response.success) {
            setName("");
            setAmount("");
        }
    }, [response.success]);

    return (
        <div className={styles['transaction-form']}>
            <h3>Add a transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction Name:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />    
                </label>
                <label>
                    <span>Amount ($):</span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button className='btn'>Add Transaction</button>
                {response.error && <p>response.error</p>}
            </form>
        </div>
    )
}