const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: {
      type: Number,
      index: true,
    },
    userName: String,
  },
  { collection: 'users', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

module.exports = mongoose.model('users', userSchema);
