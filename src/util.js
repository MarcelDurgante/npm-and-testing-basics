const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  // TODO implement
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

function toCamelCase(string) {
  // TODO implement
    return lodash.toCamelCase(string, true);
}

function getIndexOf(array, value) {
  // TODO implement
    sefaefa
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
