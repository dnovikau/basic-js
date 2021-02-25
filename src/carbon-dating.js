const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity === 'string') {
    const activity = Number.parseFloat(sampleActivity);

    return Number.isNaN(activity) || activity > MODERN_ACTIVITY || activity <= 0 ? false :
      Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD));
  }
  return false;
};
