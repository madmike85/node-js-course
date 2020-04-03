let boards = [];

const getAll = async () => {
  return boards;
};

const getBoard = async id => {
  return boards.find(board => board.id === id);
};

const addBoard = async board => {
  boards.push(board);
};

const deleteBoard = async id => {
  boards = boards.filter(board => board.id !== id);
};

const updateBoard = async (id, data) => {
  const index = boards.findIndex(board => board.id === id);
  boards[index] = { ...boards[index], ...data };
};

module.exports = { getAll, getBoard, addBoard, deleteBoard, updateBoard };
