module.exports = function countCats(matrix) {
  return matrix && matrix.length ?
  matrix.reduce((result, line) => {
    result.push(...line);
    return result;
  }, []).filter((item) => item === '^^').length : 0;
};
