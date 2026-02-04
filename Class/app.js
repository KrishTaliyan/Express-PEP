import express from 'express';
import * as userController from './controllers/user.controller.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Class app');
});

// Users routes
app.get('/users', userController.listUsers);
app.get('/users/:id', userController.getUser);
app.post('/users', userController.createUser);
app.patch('/users/:id', userController.updateUser);

export default app;
