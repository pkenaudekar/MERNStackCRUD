const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  courseId: String,
  courseTitle: String,
  courseDescription: String,
  courseDuration: Number,
});

mongoose.model('courses', courseSchema);
