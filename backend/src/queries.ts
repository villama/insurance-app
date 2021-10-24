import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'postgres',
  port: 5432,
})

export async function selectQuotes() {
  return (await pool.query('SELECT * FROM quotes ORDER BY created ASC')).rows
}

export async function selectUserQuotes(userId: number) {
  return (await pool.query('SELECT * FROM quotes WHERE user_id = $1 ORDER BY created ASC', [userId])).rows
}

export async function selectUserContracts(userId: number) {
  return (await pool.query(`SELECT * FROM contracts INNER JOIN companies ON (contracts.company_id = companies.company_id) WHERE user_id = $1`, [userId])).rows
}

export async function insertQuote(userId: number, quoteValue: number) {
  await pool.query('INSERT INTO quotes (user_id, quote_value, created) VALUES ($1, $2, NOW())', [userId, quoteValue])
}
