module.exports = function repeater(str, options) {
 const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const result = [];
  for (i=0; i<repeatTimes; i++) {
    result.push(`${i ? separator : ''}${str}`);

    for (j=0; j<additionRepeatTimes; j++) {
      result.push(`${j ? additionSeparator: ''}${addition}`);
    }
  }
  return result.join('');
};
  