import express from 'express';
import jwt from 'jsonwebtoken';
import { checkAuth } from './middleware.js';

const app = express();
app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key-change-this';

// Mock user database
const users = [
  { id: 1, username: 'krish', password: 'password123', email: 'krish@example.com', name: 'Krish' },
  { id: 2, username: 'john', password: 'john123', email: 'john@example.com', name: 'John Doe' },
];

// ========== LOGIN ENDPOINT ==========
// POST /login
// Body: { "username": "krish", "password": "password123" }
// Returns: { "token": "eyJhbGciOiJIUzI1NiIs...", "user": {...} }
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password required',
      date: new Date().toISOString(),
    });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    console.log(`Login failed for user: ${username}`);
    return res.status(401).json({
      message: 'Invalid credentials',
      date: new Date().toISOString(),
    });
  }

  // Create token that expires in 1 hour
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  console.log(`Login successful for user: ${username}`);
  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
    },
    date: new Date().toISOString(),
  });
});

// ========== PUBLIC ENDPOINT ==========
// GET /
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Auth Server',
    endpoints: {
      login: 'POST /login (body: { username, password })',
      profile: 'GET /profile (requires token)',
      data: 'GET /data (requires token)',
    },
    date: new Date().toISOString(),
  });
});

// ========== PROTECTED ENDPOINT: Profile ==========
// GET /profile
// Header: Authorization: Bearer <token>
// Returns: User profile data
app.get('/profile', checkAuth, (req, res) => {
  res.json({
    message: 'User profile',
    user: req.user,
    date: new Date().toISOString(),
  });
});

// ========== PROTECTED ENDPOINT: Data ==========
// GET /data
// Header: Authorization: Bearer <token>
// Returns: Protected data only accessible with valid token
app.get('/data', checkAuth, (req, res) => {
  res.json({
    message: 'Protected data',
    data: {
      secret: 'This is secret data accessible only with valid token',
      accessedBy: req.user.username,
      userId: req.user.id,
    },
    date: new Date().toISOString(),
  });
});

// ========== PROTECTED ENDPOINT: Update Profile ==========
// PUT /profile
// Header: Authorization: Bearer <token>
// Body: { "email": "newemail@example.com", "name": "New Name" }
app.put('/profile', checkAuth, (req, res) => {
  const { email, name } = req.body;
  
  res.json({
    message: 'Profile updated',
    user: {
      ...req.user,
      email: email || req.user.email,
      name: name || req.user.name,
    },
    date: new Date().toISOString(),
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n✅ Auth Server running on http://localhost:${PORT}`);
  console.log('\n📋 Test Users:');
  console.log('   Username: krish | Password: password123');
  console.log('   Username: john  | Password: john123');
  console.log('\n🔑 SECRET_KEY:', SECRET_KEY);
  console.log(`\n📖 Documentation at http://localhost:${PORT}\n`);
});
