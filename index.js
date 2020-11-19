const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

require('./models/Course');
require('./models/Topic');

const app = express();

app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require('./routes/courseRoutes')(app);
require('./routes/topicRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will surve up production asssets
  // like our main.js file, or main.css files!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesnt't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
