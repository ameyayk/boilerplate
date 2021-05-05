const { expect } = require('chai');
const Configuration = require('../lib/config');

describe('configuration should be returned properlty', () => {
  it('Configuration Variables defined in the source code should be returned properly', () => {
    const { MONGO_DB_HOST } = Configuration.getVariables(['MONGO_DB_HOST']);
    expect(MONGO_DB_HOST).to.be.equal('testing.mongodb.app.com');
  });
  it('Externalised configuration variables should be returned properly', () => {
    const { CLI_ENV_VAR } = Configuration.getVariables(['CLI_ENV_VAR']);
    expect(CLI_ENV_VAR).to.be.equal('secret');
  });

  it('Undefined configuration variables should return an empty value', () => {
    const result = Configuration.getVariables(['UNDEFINED_VAR', 'ANOTHER_UNDEFINED_VAR']);
    expect(result.UNDEFINED_VAR).to.be.equal('');
    expect(result.ANOTHER_UNDEFINED_VAR).to.be.equal('');
  });
});
