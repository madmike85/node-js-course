const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addUser = user => usersRepo.addUser(user);
const getUser = id => usersRepo.getUser(id);
const deleteUser = id => usersRepo.deleteUser(id);
const updateUser = (id, data) => usersRepo.updateUser(id, data);

module.exports = { getAll, addUser, getUser, deleteUser, updateUser };
