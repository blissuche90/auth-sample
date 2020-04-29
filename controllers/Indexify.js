const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connUri = process.env.MONGO_LOCAL_CONN_URL;
const User = require('../models/users');

module.exports = {
  get: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;
      
          Indexify.find({}, (err, index) => {
              
            if (!err||index.length()<1) {
              const indexify = new Indexify({value:1}); // document = instance of a model
              
              indexify.save();

              result.status = status;
              result.error = err;
              result.result = 1;
            } else {
              let nextvalue=index[0].value+1;

              status = 500;
              result.status = status;
              result.error = nextvalue;

           
            }

            res.status(status).send(result);
          }).then(() => mongoose.connection.close());
       
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);

        mongoose.connection.close();
      }
    });
  }
};