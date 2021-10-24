import React from 'react'
import styles from '../styles/FormRadio.module.scss'

interface FormRadioProps {
  label: string
  options: string[],
  selected: number
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

function FormRadio({ label, options, selected, onChange }: FormRadioProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {label}
      </div>
      <div className={styles.optionsContainer} onChange={onChange}>
        {options.map((option, idx) => (
          <label className={`${styles.option} ${idx == selected ? styles.selected : ''}`} key={option}>
            <input className={styles.radio} type='radio' name={label} value={idx}></input>
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FormRadio
