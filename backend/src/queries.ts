import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

export async function selectQuotes() {
  return (await pool.query('SELECT * FROM quotes')).rows
}

export async function insertQuote(userId: number, quoteValue: number) {
  await pool.query('INSERT INTO quotes (user_id, quote_value, created) VALUES ($1, $2, NOW())', [userId, quoteValue])
}
