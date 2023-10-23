const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: "bon bura",
  email: { type: "bonbura@gmail.com", unique: true },
  password: '####', 

});

const User = mongoose.model('User', userSchema);

module.exports = User;
