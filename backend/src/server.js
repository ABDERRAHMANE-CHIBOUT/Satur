import expo from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

const app = expo();

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
});