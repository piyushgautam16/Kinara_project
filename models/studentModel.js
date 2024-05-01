const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, total_marks INTEGER)");
});

module.exports = {
  getAllStudents: (callback) => {
    const query = "SELECT * FROM students";
    db.all(query, (err, rows) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, rows);
    });
  },
};
