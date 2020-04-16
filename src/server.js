const { PORT } = require('./common/config');
const app = require('./app');
// eslint-disable-next-line no-unused-vars
const { mongoose } = require('./common/mongoose');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
