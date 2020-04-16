const usersRepoDB = require('./user.db.repository');

const getAll = () => usersRepoDB.getAll();
const create = user => usersRepoDB.create(user);
const getById = id => usersRepoDB.getById(id);
const deleteById = id => usersRepoDB.deleteById(id);
const update = (id, data) => usersRepoDB.update(id, data);

module.exports = { getAll, create, getById, deleteById, update };
