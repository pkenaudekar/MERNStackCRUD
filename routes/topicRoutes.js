const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Topic = mongoose.model('topics');

module.exports = (app) => {
  //Create a new topic record
  app.post('/api/topics/new', async (req, res) => {
    const { _course, topicId, topicTitle, topicDescription } = req.body;

    const topic = new Topic({
      topicId,
      topicTitle,
      topicDescription,
      _course,
    });

    try {
      await topic.save();

      const topics = await Topic.find({ _course: ObjectId(_course) });

      res.send(topics);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  //Fetch all Topics under Course Records
  app.get('/api/topics/:id', async (req, res) => {
    var id = req.params.id;
    const topics = await Topic.find({ _course: ObjectId(id) });

    res.send(topics);
  });

  //Delete a Topics Record
  app.delete('/api/topics/delete/:id/:course', async (req, res) => {
    try {
      await Topic.findByIdAndRemove({
        _id: req.params.id,
      });

      const topics = await Topic.find({ _course: req.params.course });
      res.send(topics);
    } catch (err) {
      res.send(err);
    }
  });

  //Update a Topics Record
  app.post('/api/topics/update/:id/:course', async (req, res) => {
    const { topicId, topicTitle, topicDescription } = req.body;

    try {
      const topic = await Topics.findById({ _id: req.params.id });

      topic.topicId = topicId;
      topic.topicTitle = topicTitle;
      topic.topicDescription = topicDescription;

      await topic.save();
      const topics = await Topic.find({ _course: req.params.course });
      res.send(topics);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
