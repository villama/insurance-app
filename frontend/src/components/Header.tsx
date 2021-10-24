import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Image src="/axa-logo.svg" width="45" height="45"></Image>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.link}>Get a Quote</a>
          </Link>
          <Link href="/myinsurance">
            <a className={styles.link}>My Insurance</a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
