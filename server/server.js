const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configuration de la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Remplacez par votre utilisateur MySQL
  password: '', // Remplacez par votre mot de passe MySQL
  database: 'todo_app' // Créez cette base de données avant de lancer
});

db.connect(err => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

// Création de la table si elle n'existe pas
db.query(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) throw err;
});

// Routes API
// Récupérer toutes les tâches
app.get('/api/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Ajouter une nouvelle tâche
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, title, completed: false });
  });
});

// Mettre à jour une tâche
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.query('UPDATE tasks SET completed = ? WHERE id = ?', [completed, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Tâche mise à jour' });
  });
});

// Supprimer une tâche
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Tâche supprimée' });
  });
});

// 
app.get('/api/stats', (req, res) => {
  db.query('SELECT COUNT(*) as total, SUM(completed) as completed FROM tasks', (err, results) => {
    if (err) throw err;
    const { total, completed } = results[0];
    res.json({
      total,
      completed,
      pending: total - completed,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`);
});