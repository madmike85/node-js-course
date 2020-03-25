const { program } = require('commander');

program
  .requiredOption('-s, --shift <num>', 'a shift', val => parseInt(val, 10))
  .requiredOption('-a, --action [type],', 'an action encode/decode')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file');

module.exports = program;
