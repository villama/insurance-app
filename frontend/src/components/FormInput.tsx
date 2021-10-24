import React from 'react'
import styles from '../styles/FormInput.module.scss'

interface FormInputProps {
  label: string
  value: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

function FormInput({ label, value, onChange }: FormInputProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {label}
      </div>
        <input className={styles.input} name={label} value={value} onChange={onChange}></input>
    </div>
  )
}

export default FormInput
