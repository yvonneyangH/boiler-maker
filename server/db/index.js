const db = require('./db');
const User = require('./User');
const Kitten = require('./Kitten');
const Puppy = require('./Puppy');

module.exports = {
    db,
    User,
    Kitten,
    Puppy
    // Include your models in your module.exports as well!
    // The seed file expects to find them there!
  }