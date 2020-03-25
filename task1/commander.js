const { program } = require('commander');

program
  .requiredOption('-s, --shift <number>', 'a shift')
  .requiredOption('-a, --action [type],', 'an action encode/decode')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file');

if (program.action !== 'decode' || program.action !== 'encode') {
  process.stderr.write('action should be "encode" or "decode"');
}

module.exports = program;
