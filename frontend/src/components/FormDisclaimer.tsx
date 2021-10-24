import React from 'react'
import styles from '../styles/FormDisclaimer.module.scss'

interface FormDisclaimerProps {
  showValidation: boolean,
  checked: boolean,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

function FormDisclaimer({ showValidation, checked, onChange }: FormDisclaimerProps) {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <span className={styles.message}>
          We make certain assumptions about you in order to provide you with a quote. You must read and accept the assumptions before you continue.
        </span>
        <div className={styles.checkboxContainer}>
          <label>
            <input className={styles.checkbox} type='checkbox' name='disclaimer' onChange={onChange}/>
            <div className={`${styles.option} ${checked ? styles.checked : ''}`}></div>
          </label>
          <p className={styles.checkboxMessage}>
            I have read and accept the assumptions.
          </p>
        </div>
      </div>
      { showValidation && !checked && <p className={styles.validationMessage}>You must accept to proceed</p> }
    </React.Fragment>
  )
}

export default FormDisclaimer
