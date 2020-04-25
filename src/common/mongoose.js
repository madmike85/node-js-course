const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./logger');

dotenv.config();

mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGO_CONNECTION_STRING /* 'mongodb://localhost:27017/RSS'*/,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(error => logger.error(error));

module.exports = { mongoose };
