import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { sayHi, getUserQuotes, getQuotes, calculateQuote, getUserContracts } from './service'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', sayHi)

app.get('/quotes', getQuotes)
app.get('/quotes/:userId', getUserQuotes)
app.post('/quotes', calculateQuote)

app.get('/contracts/:userId', getUserContracts)

app.listen(PORT, () => console.log(`⚡️[server]: Server is running on port ${PORT}`))
