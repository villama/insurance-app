import type { Request, Response } from 'express'
import { validateQuoteBody } from './validate'
import { selectQuotes, selectUserQuotes, insertQuote, selectUserContracts } from './queries'
import QuoteInfo from './types/QuoteInfo'

export function sayHi(req: Request, res: Response) {
  res.send('Hola')
}

export async function getQuotes(req: Request, res: Response) {
  res.send(await selectQuotes())
}

export async function getUserQuotes(req: Request, res: Response) {
  res.send(await selectUserQuotes(parseInt(req.params.userId)))
}

export async function calculateQuote(req: Request, res: Response) {
  const quoteInfo = validateQuoteBody(req.body)
  if (!quoteInfo) {
    return res.status(400).send('Request body failed validation')
  }
  const quote = await calculateQuoteValue(quoteInfo)
  await insertQuote(quoteInfo.userId, quote)
  res.send({ quote })
}

export async function getUserContracts(req: Request, res: Response) {
  res.send(await selectUserContracts(parseInt(req.params.userId)))
}

async function calculateQuoteValue(body: QuoteInfo) {
  // Business logic goes here
  const timeConsumingCalculation = await new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000)
    }, 1000)
  })
  return timeConsumingCalculation
}
