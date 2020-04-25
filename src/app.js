/* eslint-disable no-process-exit */
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const loginRouter = require('./resources/login/login.router');
const logger = require('./common/logger');
const { handleErrors, error404 } = require('./common/errorHandler');
const { authenticate } = require('./common/auth');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use((req, res, next) => {
  const { url, query, body } = req;
  const message = `[url:] ${url}, [params:] ${
    !query.params ? 'none' : query.params
  }, [body:] ${JSON.stringify(body)}`;
  logger.info(message);
  next();
});

app.use('/users', authenticate, userRouter);
app.use('/boards', authenticate, boardRouter);
app.use('/boards/:boardId/tasks', authenticate, taskRouter);
app.use('/login', loginRouter);

app.use(error404);
app.use(handleErrors);

process.on('uncaughtException', error => {
  const message = `[message:] Error captured: ${error.message}`;
  logger.error(message);
  process.exit(1);
});

process.on('unhandledRejection', reason => {
  const message = `[message:] Unhandled rejection detected: ${reason.message}`;
  logger.error(message);
});

module.exports = app;
