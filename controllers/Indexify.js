const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connUri = process.env.MONGO_LOCAL_CONN_URL;
const Indexify = require("../models/indexify");

module.exports = {
  get: (req, res) => {
    mongoose.connect(
      connUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        let result = {};
        let status = 200;
        if (!err) {
          Indexify.find({}, (err, index) => {
            if (!Array.isArray(index)) {
              const indexify = new Indexify({ value: 1 }); // document = instance of a model

              indexify.save();

              result.status = status;
              result.result = 1;
            } else {
              let ret = index[0].value + 1;
              Indexify.updateOne(
                { _id: index[0]._id },
                { $set: { value: ret } },
                { upsert: true },
                function (err, doc) {
                  if (err) {
                    status = 500;
                    result.status = status;
                    result.error = err;
                  }
                }
              );
              status = 200;
              result.status = status;
              result.result = ret;
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
      }
    );
  },
};
