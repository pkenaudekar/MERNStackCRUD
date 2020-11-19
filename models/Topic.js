const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  _course: { type: Schema.Types.ObjectId, ref: 'Course' },
  topicId: String,
  topicTitle: String,
  topicDescription: String,
});

mongoose.model('topics', topicSchema);
