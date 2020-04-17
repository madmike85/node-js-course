const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: uuid
    },
    title: {
      type: String,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  { versionKey: false }
);

boardSchema.statics.toResponse = user => {
  const { id, title, columns } = user;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
