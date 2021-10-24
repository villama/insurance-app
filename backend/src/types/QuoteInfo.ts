export default interface QuoteInfo {
  userId: number
  honoraryOptions: string[],
  honoraryIdx: number,
  firstName: string,
  lastName: string,
  dob: { day: string, month: string, year: string },
  email: string,
  phoneNumber: string,
  smoker: number,
  paySchedule: number,
  insuranceStartDate: { day: string, month: string, year: string },
  disclaimerAgree: boolean,
  quoteValue: number
}
