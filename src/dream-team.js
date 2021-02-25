module.exports = function createDreamTeam(members) {
  return members && members.length ?
  members.filter((member) => typeof member === 'string')
  .map((member) => member.trim().slice(0, 1).toUpperCase())
  .sort().join('') : false;
};
