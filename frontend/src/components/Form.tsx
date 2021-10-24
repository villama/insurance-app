import { useState } from 'react'
import styles from '../styles/Form.module.scss'
import FormDate from './FormDate'
import FormDisclaimer from './FormDisclaimer'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import FormSubmitButton from './FormSubmitButton'
import QuoteInfo from '../types/QuoteInfo'

interface FormProps {
  reviewQuote: (body: any) => void
  setLoadingContent: (body: any) => void
}

function Form({ reviewQuote, setLoadingContent }: FormProps) {
  const honoraryOptions = ['Mr', 'Mrs', 'Ms', 'Dr']
  const [honoraryIdx, setHonoraryIdx] = useState(-1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState({ day: '', month: '', year: '' })
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [smoker, setSmoker] = useState(-1)
  const [paySchedule, setPaySchedule] = useState(-1)
  const [insuranceStartDate, setInsuranceStartDate] = useState({ day: '', month: '', year: '' })
  const [disclaimerAgree, setDisclaimerAgree] = useState(false)

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    setLoadingContent(true)
    const body: QuoteInfo = {
      honoraryOptions,
      honoraryIdx,
      firstName,
      lastName,
      dob,
      email,
      phoneNumber,
      smoker,
      paySchedule,
      insuranceStartDate,
      disclaimerAgree,
      quoteValue: -1
    }

    const res = await fetch('http://localhost:3001/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const quoteValue = await res.json()
    body.quoteValue = quoteValue.quote
    setLoadingContent(false)
    reviewQuote(body)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.mainArea}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1>Your personal details</h1>
          </header>
          <div className={styles.fieldWrapper}>
            <FormRadio
              label='Title'
              selected={honoraryIdx}
              options={honoraryOptions}
              onChange={evt => setHonoraryIdx(parseInt(evt.target.value))}
            />
            <div className={styles.names}>
              <FormInput
                label='First name'
                value={firstName}
                onChange={evt => setFirstName(evt.target.value)}
              />
              <FormInput
                label='Last name'
                value={lastName}
                onChange={evt => setLastName(evt.target.value)}
              />
            </div>
            <FormDate
              label='Date of birth'
              value={dob}
              onChange={evt => setDob(prevDob => ({ ...prevDob, [evt.target.name]: evt.target.value }))}
            />
            <FormInput
              label='Email address'
              value={email}
              onChange={evt => setEmail(evt.target.value)}
            />
            <FormInput
              label='Phone number'
              value={phoneNumber}
              onChange={evt => setPhoneNumber(evt.target.value)}
            />
            <FormRadio
              label='Have you smoked in the last six months?'
              selected={smoker}
              options={['Yes', 'No']}
              onChange={evt => setSmoker(parseInt(evt.target.value))}
            />
          </div>
        </div>

        <div className={styles.card}>
          <header className={styles.header}>
            <h1>Your cover</h1>
          </header>
          <div className={styles.fieldWrapper}>
            <FormRadio
              label='How will you pay for your insurance?'
              selected={paySchedule}
              options={['Monthly', 'Yearly']}
              onChange={evt => setPaySchedule(parseInt(evt.target.value))}
            />
            <FormDate
              label='When do you want your insurance to start?'
              value={insuranceStartDate}
              onChange={evt => setInsuranceStartDate(prevDate => ({...prevDate, [evt.target.name]: evt.target.value }))}
            />
            <FormDisclaimer
              checked={disclaimerAgree}
              onChange={evt => setDisclaimerAgree(!disclaimerAgree)}
            />
            <FormSubmitButton />
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        Sidebar
      </div>
    </form>
  )
}

export default Form
