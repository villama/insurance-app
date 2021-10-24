import styles from '../styles/Payment.module.scss'

function Payment() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1>Payment</h1>
          </header>
          <div className={styles.contentContainer}>
            <div className={styles.quoteValue}>
              $$$
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Payment
