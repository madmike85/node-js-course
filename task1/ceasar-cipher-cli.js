const fs = require('fs');

const program = require('./commander');
const { pipeline } = require('stream');

const transformStream = require('./transformStream');

program.parse(process.argv);

let inputStream;
let outputStream;

if (program.input) {
  inputStream = fs.createReadStream(program.input);
} else {
  inputStream = process.stdin;
}

if (program.output) {
  outputStream = fs.createWriteStream(program.output);
} else {
  outputStream = process.stdout;
}

pipeline(inputStream, transformStream, outputStream, err =>
  process.stderr.write('Input or Output file cannot be reached', err)
);
