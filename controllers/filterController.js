const studentModel = require('../models/studentModel');

module.exports = {
  applyFilter: (req, res) => {
    const filterCriteria = req.query.criteria;
    const students = studentModel.getAllStudents();

    const filteredStudents = students.filter(student => student.some_property === filterCriteria);

    res.json(filteredStudents);
  },
};
