import Image from 'next/image'
import styles from '../styles/LoadingOverlay.module.scss'

function LoadingOverlay() {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerContainer}>
        <Image src='/loading.gif' width={150} height={150} />
      </div>
    </div>
  )
}

export default LoadingOverlay
