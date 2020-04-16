const uuid = require('uuid');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
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
    order: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    userId: {
      type: String
    },
    boardId: {
      type: String
    },
    columnId: {
      type: String
    }
  },
  { versionKey: false }
);

taskSchema.statics.toResponse = user => {
  const { id, title, order, description, userId, boardId, columnId } = user;
  return { id, title, order, description, userId, boardId, columnId };
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
