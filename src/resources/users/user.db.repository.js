const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findOne({ _id: id });
};

const create = async user => {
  const newUser = new User(user);
  return newUser.save();
};

const deleteById = async id => {
  return User.findOneAndRemove({ _id: id });
};

const update = async (id, data) => {
  return User.findOneAndUpdate({ _id: id }, { $set: data });
};

module.exports = { getAll, create, getById, deleteById, update };
