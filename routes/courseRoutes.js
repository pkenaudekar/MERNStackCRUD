const mongoose = require('mongoose');

const Course = mongoose.model('courses');
const Topic = mongoose.model('topics');

module.exports = (app) => {
  //Fetch all Course Records
  app.get('/api/courses', async (req, res) => {
    const courses = await Course.find();

    res.send(courses);
  });

  //Delete a Course Record
  app.delete('/api/courses/delete/:id', async (req, res) => {
    try {
      //var id = req.params.id;
      await Topic.deleteMany({ _course: req.params.id });

      await Course.findByIdAndRemove({
        _id: req.params.id,
      });

      const courses = await Course.find();
      res.send(courses);
    } catch (err) {
      res.json(err).send(err);
    }
  });

  //Update a Course Record
  app.post('/api/courses/update/:id', async (req, res) => {
    const {
      courseId,
      courseTitle,
      courseDescription,
      courseDuration,
    } = req.body;

    try {
      //await Topics.deleteMany({ _course: req.params.id });
      const course = await Course.findById({ _id: req.params.id });

      course.courseId = courseId;
      course.courseTitle = courseTitle;
      course.courseDescription = courseDescription;
      course.courseDuration = courseDuration;

      await course.save();

      const courses = await Course.find();
      res.send(courses);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  //Create a new course record
  app.post('/api/courses/new', async (req, res) => {
    const {
      courseId,
      courseTitle,
      courseDescription,
      courseDuration,
    } = req.body;

    const course = new Course({
      courseId,
      courseTitle,
      courseDescription,
      courseDuration,
    });

    try {
      await course.save();

      const courses = await Course.find();
      res.send(courses);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
