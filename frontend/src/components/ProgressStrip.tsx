import styles from '../styles/ProgressStrip.module.scss'

interface ProgressStripProps {
  idx: number
}

function ProgressStrip({ idx }: ProgressStripProps) {
  return (
    <div className={styles.container}>
      <div className={[styles.step, idx === 0 ? styles.selected : ''].join(' ')}>
        <span className={styles.badge}>1</span>
        <span className={styles.text}>
          Your details
        </span>
      </div>
      <div className={[styles.step, idx === 1 ? styles.selected : ''].join(' ')}>
        <span className={styles.badge}>2</span>
        <span className={styles.text}>
          Review your quote
        </span>
      </div>
      <div className={[styles.step, idx === 2 ? styles.selected : ''].join(' ')}>
        <span className={styles.badge}>3</span>
        <span className={styles.text}>
          Payment
        </span>
      </div>
    </div>
  )
}

export default ProgressStrip
