import styles from '../styles/Header.module.scss'
import Image from 'next/image'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Image src="/axa-logo.svg" width="45" height="45"></Image>
        <div className={styles.links}>
          <a className={styles.link}>Get a Quote</a>
          <a className={styles.link}>My Insurance</a>
        </div>
      </div>
    </header>
  )
}

export default Header
