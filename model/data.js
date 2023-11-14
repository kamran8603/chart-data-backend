// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const UserModel = mongoose.model('users', UserSchema);

// module.exports = { UserSchema, UserModel };
const mongoose = require('mongoose');

const JsonSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: Date,
  published: Date,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const JsonModel = mongoose.model('JsonData', JsonSchema);

module.exports = {JsonSchema, JsonModel };
