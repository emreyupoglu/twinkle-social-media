const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
    Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
   },
   
   // Get single thought
   getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.coursId })
      .select('-__v')
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
}