import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import helmet from 'helmet'

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express()

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`));
