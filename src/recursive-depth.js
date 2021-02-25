module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? arr.reduce((acc, i) => {
      return Math.max(acc, this.calculateDepth(i));
    }, 0) + 1 : 0;
  }
};