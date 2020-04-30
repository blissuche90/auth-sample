const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const IndexSchema = new Schema({
  value: {
    type: 'Number',
    required: true,
    trim: true,
    unique: true
  }
});


module.exports = mongoose.model('Indexify', IndexSchema); // instance of schema