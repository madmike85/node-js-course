const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const create = user => usersRepo.create(user);
const getById = id => usersRepo.getById(id);
const deleteById = id => usersRepo.deleteById(id);
const update = (id, data) => usersRepo.update(id, data);

module.exports = { getAll, create, getById, deleteById, update };
