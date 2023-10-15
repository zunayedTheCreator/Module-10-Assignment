const Works = require('../models/worksModel');

module.exports = {
  createWork: (req, res) => {
    const workData = req.body;
    Works.create(workData, (err, work) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to create a work' });
      }
      return res.json(work);
    });
  },

  getWorks: (req, res) => {
    Works.find((err, works) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch works' });
      }
      return res.json(works);
    });
  },

};
