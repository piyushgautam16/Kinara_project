const express = require('express');
const app = express();
const PORT = 3000; // Or any port you prefer
const routes = require('./routes');
const sqlite3 = require('sqlite3').verbose();
const ejs = require('ejs');


const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, total_marks INTEGER)");
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
