module.exports = function transform(arr) {
  const result = [];
  for (let i =0; i< arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        result.pop();
        break;
      case '--double-next':
        arr[i + 1] && result.push(arr[i + 1]);
        break;
      case '--double-prev':
        arr[i - 1] && result.push(arr[i - 1]);
        break;
      default:
        result.push(arr[i]);
        break;
    };
  }

  return result;
};
