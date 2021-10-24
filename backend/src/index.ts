import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { sayHi, getQuotes, calculateQuote } from './service'

const PORT = process.env.PORT || 3001
const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', sayHi)
app.get('/quote', getQuotes)
app.post('/quote', calculateQuote)

app.listen(PORT, () => console.log(`⚡️[server]: Server is running on port ${PORT}`))
