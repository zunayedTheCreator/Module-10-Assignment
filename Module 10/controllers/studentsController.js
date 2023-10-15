const Students = require('../models/studentsModel');

module.exports = {
  createStudent: (req, res) => {
    const studentData = req.body;
    Students.create(studentData, (err, student) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to create a student' });
      }
      return res.json(student);
    });
  },

  getStudents: (req, res) => {
    Students.find((err, students) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch students' });
      }
      return res.json(students);
    });
  },

};
