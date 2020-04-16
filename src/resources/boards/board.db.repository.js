const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findOne({ _id: id });
};

const create = async board => {
  const newBoard = new Board(board);
  return newBoard.save();
};

const deleteById = async id => {
  return Board.findOneAndRemove({ _id: id });
};

const update = async (id, data) => {
  return Board.findOneAndUpdate({ _id: id }, { $set: data });
};

module.exports = { getAll, getById, create, deleteById, update };
