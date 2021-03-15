const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Create a schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving a new user (note that we are not using the fat arrow here because we need to refer to `this.password`, because we are referencing a particular user object we created when signing up a new user)
UserSchema.pre('save', async function (next) {
  try {
    // generate a salt
    const salt = await bcrypt.genSalt(10);
    // hash the password using the salt we just generated (it is actually salt + hash)
    const passwordHash = await bcrypt.hash(this.password, salt);
    // re-assign hashed version over original, plain text password
    this.password = passwordHash;
    // proceed with the next operation
    next();
  } catch (error) {
    next(error);
  }
});

// Create a method to verify password match (cannot use the fat arrow for same reason as above)
UserSchema.methods.isValidPassword = async function (loginPassword) {
  try {
    return await bcrypt.compare(loginPassword, this.password); // returns a boolean
  } catch (error) {
    throw new Error(error);
  }
};

// Create a model
const User = mongoose.model('user', UserSchema);

// Export the model
module.exports = User;
