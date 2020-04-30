const users = require('./users');
const indexes = require('./Indexify');

module.exports = (router) => {
  users(router);
  indexes(router);
  return router;
};