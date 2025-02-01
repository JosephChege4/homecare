import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

// Body parser setup
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Logging middleware
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.query);
  next();
});


// First route
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/templates/index.html'));
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;