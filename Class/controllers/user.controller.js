// Simple in-memory user controller for demonstration
const users = [];
let nextId = 1;

export function listUsers(req, res) {
  res.json(users);
}

export function getUser(req, res) {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}

export function createUser(req, res) {
  const payload = req.body || {};
  const user = { id: nextId++, ...payload };
  users.push(user);
  res.status(201).json(user);
}

export function updateUser(req, res) {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  Object.assign(user, req.body || {});
  res.json(user);
}

export default { listUsers, getUser, createUser, updateUser };
