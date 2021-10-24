import styles from '../styles/Review.module.scss'
import QuoteInfo from '../types/QuoteInfo'

interface ReviewProps {
  quoteInfo: QuoteInfo
  proceedToPayment: () => void
}

function Review({ quoteInfo, proceedToPayment }: ReviewProps) {
  const { firstName, lastName, honoraryIdx, honoraryOptions, quoteValue } = quoteInfo
  const description = `${honoraryOptions[honoraryIdx]}. ${firstName} ${lastName}, your calculated quote is:`

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1>Review your quote</h1>
          </header>
          <div className={styles.contentContainer}>
            <div className={styles.description}>
              {description}
            </div>
            <div className={styles.quoteValue}>
              {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(quoteValue)}
            </div>
            <button type='button' className={styles.button} onClick={proceedToPayment}>
              Proceed to Payment
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Review
