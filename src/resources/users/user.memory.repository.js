let users = [];

const getAll = async () => {
  return users;
};

const getUser = async id => {
  return users.find(user => user.id === id);
};

const addUser = async user => {
  users.push(user);
};

const deleteUser = async id => {
  users = users.filter(user => user.id !== id);
};

const updateUser = async (id, data) => {
  const index = users.findIndex(user => user.id === id);
  users[index] = { ...users[index], ...data };
};

module.exports = { getAll, addUser, getUser, deleteUser, updateUser };
