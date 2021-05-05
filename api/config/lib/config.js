// eslint-disable-next-line import/no-dynamic-require
const envConfig = require(`../env-config/${process.env.NODE_ENV}`);
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
class Configuration {
  constructor() {
    this.obj = {};
    Object.keys(envConfig).forEach((key) => {
      if (key) {
        process.env[key] = envConfig[key];
      }
    });
  }

  getVariables(envVars = []) {
    try {
      if (envVars && Array.isArray(envVars)) {
        const missingVariables = [];
        envVars.forEach((variable) => {
          if (variable) {
            if (envConfig[variable]) {
              this.obj[variable] = envConfig[variable];
            } else if (process.env[variable]) {
              this.obj[variable] = process.env[variable];
            } else {
              missingVariables.push(variable);
            }
          }
        });
        if (missingVariables.length) {
          console.warn(`the variables ${missingVariables} are not found`);
          return missingVariables.reduce((result, item) => {
            Object.assign(result, { [item]: '' });
            return result;
          }, {});
        }
      }
      return this.obj;
    } catch (error) {
      console.error('error while bootstrapping the configuration ', error);
      return this.obj;
    }
  }
}
module.exports = new Configuration();
