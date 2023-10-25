const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  name: String,
  description: String,
  mode: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Route', routeSchema);
