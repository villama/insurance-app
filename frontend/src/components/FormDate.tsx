import React from 'react'
import styles from '../styles/FormDate.module.scss'

interface FormDateProps {
  label: string,
  value: {
    day: string,
    month: string,
    year: string
  }
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

function FormDate({ label, value, onChange }: FormDateProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {label}
      </div>
      <div className={styles.date}>
        <div className={styles.inputContainer}>
          <label htmlFor='day' className={styles.label}>Day</label>
          <input name='day' value={value.day} onChange={onChange} placeholder='DD' className={[styles.input, styles.day].join(' ')}></input>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='month' className={styles.label}>month</label>
          <input name='month' value={value.month} onChange={onChange} placeholder='MM' className={[styles.input, styles.month].join(' ')}></input>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='year' className={styles.label}>year</label>
          <input name='year' value={value.year} onChange={onChange} placeholder='YYYY' className={[styles.input, styles.year].join(' ')}></input>
        </div>
      </div>
    </div>
  )
}

export default FormDate
