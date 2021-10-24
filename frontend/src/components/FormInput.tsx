import React from 'react'
import styles from '../styles/FormInput.module.scss'

interface FormInputProps {
  showValidation: boolean
  label: string
  value: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

function FormInput({ showValidation, label, value, onChange }: FormInputProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {label}
      </div>
      <input className={styles.input} name={label} value={value} onChange={onChange}></input>
      { showValidation && value === '' && <p className={styles.validationMessage}>Must be filled</p> }
    </div>
  )
}

export default FormInput
