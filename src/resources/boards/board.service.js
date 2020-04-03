const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const addBoard = board => boardsRepo.addBoard(board);
const getBoard = id => boardsRepo.getBoard(id);
const deleteBoard = id => boardsRepo.deleteBoard(id);
const updateBoard = (id, data) => boardsRepo.updateBoard(id, data);

module.exports = { getAll, addBoard, getBoard, deleteBoard, updateBoard };
