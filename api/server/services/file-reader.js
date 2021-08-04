const fs = require('fs');

module.exports.getPositionToReadFrom = (path) => {
  const stream = fs.createReadStream(path);
  const { size } = fs.Stats(path);
};
