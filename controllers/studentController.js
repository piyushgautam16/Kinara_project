const studentModel = require('../models/studentModel');

module.exports = {
  getStudents: (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    studentModel.getAllStudents((err, students) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedStudents = students.slice(startIndex, endIndex);

      res.json({
        page,
        pageSize,
        totalPages: Math.ceil(students.length / pageSize),
        totalStudents: students.length,
        students: paginatedStudents,
      });
    });
  },
};
