const controller = require('../controllers/Indexify');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
  router.route('/next')
  .get(validateToken,controller.get); // This route will be protected
};