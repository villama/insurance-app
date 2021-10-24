import QuoteInfo from './types/QuoteInfo'

export function validateQuoteBody(body: any) {
  try {
    // TODO: Actually validate the data
    const quoteInfo: QuoteInfo = { ...body }
    return quoteInfo
  } catch (err) {
    return null
  }
}
