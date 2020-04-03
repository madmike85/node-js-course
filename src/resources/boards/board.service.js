const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const create = board => boardsRepo.create(board);
const getById = id => boardsRepo.getById(id);
const deleteById = id => boardsRepo.deleteById(id);
const update = (id, data) => boardsRepo.update(id, data);

module.exports = { getAll, create, getById, deleteById, update };
