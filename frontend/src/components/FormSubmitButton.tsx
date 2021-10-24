import React from 'react'
import styles from '../styles/FormSubmitButton.module.scss'

function FormSubmitButton() {
  return (
    <button type='submit' className={styles.container}>
      Get a Quote
    </button>
  )
}

export default FormSubmitButton
