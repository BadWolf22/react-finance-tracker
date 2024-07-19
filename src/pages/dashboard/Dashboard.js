import TransactionForm from '../../components/transactionForm/TransactionForm'
import TransactionList from '../../components/transactionList/TransactionList'
import styles from './Dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TransactionList />
            </div>
            <div className={styles.sidebar}>
                <TransactionForm />
            </div>
        </div>
    )
}