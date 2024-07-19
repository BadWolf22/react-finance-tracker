import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';
import { useUserContext } from '../../hooks/useUserContext';
import styles from './TransactionList.module.css';

export default function TransactionList() {
    const { user } = useUserContext();
    const { documents, error } = useCollection(user.uid);
    const { removeDocument } = useFirestore(user.uid);

    const handleDelete = (docId) => {
        removeDocument(docId);
    };

    return (
        <div className={styles['transaction-list']}>
            <h3>Transaction List</h3>
            {error && <p>{error}</p>}
            <ul>
                {documents && documents.map(doc => (
                    <li key={doc.id}>
                        <p className={styles.name}>{doc.name}</p>
                        <p className={styles.amount}>${parseFloat(doc.amount).toFixed(2)}</p>
                        <button className='btn' onClick={() => handleDelete(doc.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}