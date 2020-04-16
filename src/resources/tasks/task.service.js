const tasksRepoDB = require('./task.db.repository');

const getAll = boardId => tasksRepoDB.getAll(boardId);
const create = task => tasksRepoDB.create(task);
const getById = id => tasksRepoDB.getById(id);
const deleteById = id => tasksRepoDB.deleteById(id);
const update = (id, data) => tasksRepoDB.update(id, data);
const deleteByBoardId = boardId => tasksRepoDB.deleteByBoardId(boardId);
const updateByUserId = userId => tasksRepoDB.updateByUserId(userId);

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  deleteByBoardId,
  update,
  updateByUserId
};
