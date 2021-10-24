import type { Request, Response } from 'express'
import { validateQuoteBody } from './validate'
import { selectQuotes, insertQuote } from './queries'

export function sayHi(req: Request, res: Response) {
  res.send('Hola')
}

export async function getQuotes(req: Request, res: Response) {
  res.send(await selectQuotes())
}

export async function calculateQuote(req: Request, res: Response) {
  if (!validateQuoteBody(req.body)) {
    return res.status(400).send('Request body failed validation')
  }
  const quote = await calculateQuoteValue(req.body)
  await insertQuote(1, quote)
  res.send({ quote })
}

async function calculateQuoteValue(body: any) {
  // Business logic goes here
  const timeConsumingCalculation = await new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000)
    }, 1000)
  })
  return timeConsumingCalculation
}
