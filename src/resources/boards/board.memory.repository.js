let boards = [];

const getAll = async () => {
  return boards;
};

const getById = async id => {
  return boards.find(board => board.id === id);
};

const create = async board => {
  boards.push(board);
};

const deleteById = async id => {
  boards = boards.filter(board => board.id !== id);
};

const update = async (id, data) => {
  const index = boards.findIndex(board => board.id === id);
  boards[index] = { ...boards[index], ...data };
};

module.exports = { getAll, getById, create, deleteById, update };
