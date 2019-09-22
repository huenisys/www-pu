const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const { parsed: cfg } = result;

module.exports = {
  cfg,
  config: {
    app: {
      name: process.env.APP_NAME,
      ip: process.env.APP_IP,
      port: process.env.APP_PORT,
    }
  }
};
