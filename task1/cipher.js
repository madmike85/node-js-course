const chiper = (line, action, shift) => {
  const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
  const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (action === 'decode') {
    return line.replace(/[a-z]/gi, match => {
      if (/[a-z]/.test(match)) {
        const oldIndex = alphaLower.indexOf(match);
        let newIndex = oldIndex - +shift;
        if (newIndex < 0) {
          newIndex = 26 + (newIndex % 26);
        }
        return alphaLower[newIndex];
      }
      const oldIndex = alphaUpper.indexOf(match);
      let newIndex = oldIndex - +shift;
      if (newIndex < 0) {
        newIndex = 26 + (newIndex % 26);
      }
      return alphaUpper[newIndex];
    });
  }
  return line.replace(/\w/gi, match => {
    if (/[a-z]/.test(match)) {
      const oldIndex = alphaLower.indexOf(match);
      const newIndex = (oldIndex + +shift) % 26;
      return alphaLower[newIndex];
    }
    const oldIndex = alphaUpper.indexOf(match);
    const newIndex = (oldIndex + +shift) % 26;
    return alphaUpper[newIndex];
  });
};

module.exports = chiper;
