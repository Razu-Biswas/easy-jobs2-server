const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    service: {
      type: String,
      enum: ['basic', 'standard', 'premium'],
    },
    cardType: {
      type: String,
    },
    postLimit: {
      type: Number,
    },
    paid: {
      type: Boolean,
    },
    ban: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['admin', 'jobSeeker', 'jobPoster'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const People = mongoose.model('People', peopleSchema);

module.exports = People;
