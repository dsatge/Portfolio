import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerProject from './routes/skillRoutes.js';
import routerSkill from './routes/projectRoutes.js';

// Init
dotenv.config(); // chaerge .env
const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors()); // To connect front to backend, check security
app.use(express.json()); // To read json

// --- ROUTES ---
app.use('/api/skills', routerSkill);
app.use('/api/projects', routerProject);

app.get('/', (req, res) => {
  res.send('Backend Portfolio organised and ready');
});

// Server launch
app.listen(PORT, () => {
  console.log(`Link to server : http://localhost:${PORT}`);
});