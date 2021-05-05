const { consola } = require('consola');

module.exports.createUser = async (user) => {
  consola.info('user to create is ', user);
  return {
    userId: 131,
    userName: 'kyle',
  };
};
