const Task = require('./task.model');

const getAll = async boardId => {
  return Task.find({ boardId });
};

const getById = async id => {
  return Task.findOne({ _id: id });
};

const create = async task => {
  const newTask = new Task(task);
  return newTask.save();
};

const deleteById = async id => {
  return Task.findOneAndRemove({ _id: id });
};

const deleteByBoardId = async boardId => {
  return Task.deleteMany({ boardId });
};

const update = async (id, data) => {
  return Task.findOneAndUpdate({ _id: id }, { $set: data });
};

const updateByUserId = async userId => {
  return Task.updateMany({ userId }, { $set: { userId: null } });
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  deleteByBoardId,
  update,
  updateByUserId
};
