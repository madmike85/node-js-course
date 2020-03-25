const { Transform } = require('stream');
const cipher = require('./cipher');
const program = require('./commander');

const transformStream = new Transform({
  transform(chunk) {
    const result = cipher(chunk.toString(), program.action, program.shift);
    this.push(result);
  }
});

module.exports = transformStream;
