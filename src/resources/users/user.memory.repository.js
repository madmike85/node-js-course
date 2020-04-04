let users = [
  {
    id: '1',
    name: 'User',
    login: 'USER',
    password: '1234zxcv'
  }
];

const getAll = async () => {
  return users;
};

const getById = async id => {
  return users.find(user => user.id === id);
};

const create = async user => {
  users.push(user);
};

const deleteById = async id => {
  users = users.filter(user => user.id !== id);
};

const update = async (id, data) => {
  const index = users.findIndex(user => user.id === id);
  users[index] = { ...users[index], ...data };
};

module.exports = { getAll, create, getById, deleteById, update };
