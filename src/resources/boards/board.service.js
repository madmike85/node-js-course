const boardsRepoDB = require('./board.db.repository');

const getAll = () => boardsRepoDB.getAll();
const create = board => boardsRepoDB.create(board);
const getById = id => boardsRepoDB.getById(id);
const deleteById = id => boardsRepoDB.deleteById(id);
const update = (id, data) => boardsRepoDB.update(id, data);

module.exports = { getAll, create, getById, deleteById, update };
