const { expect } = require('chai');
const { getPositionToReadFrom } = require('../services');

describe('file reader tests', () => {
  it('getPositionToStartFrom should return the correct position in the file to read from ', async () => {
    const lastNLines = 10;
    const startPosition = await getPositionToReadFrom('logFile', lastNLines);
  });
});
