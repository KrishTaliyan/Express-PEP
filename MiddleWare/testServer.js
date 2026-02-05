import express from 'express';
import { checkAuth } from './middleware.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Test server running'));

// Protected route using middleware
app.get('/profile', checkAuth, (req, res) => {
  // middleware attaches req.user
  res.json({
    success: true,
    user: req.user || null,
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Test server listening on http://localhost:${port}`));
