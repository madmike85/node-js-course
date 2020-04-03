const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const create = task => tasksRepo.create(task);
const getById = id => tasksRepo.getById(id);
const deleteById = id => tasksRepo.deleteById(id);
const update = (id, data) => tasksRepo.update(id, data);
const deleteByBoardId = boardId => tasksRepo.deleteByBoardId(boardId);
const updateByUserId = userId => tasksRepo.updateByUserId(userId);

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  deleteByBoardId,
  update,
  updateByUserId
};
