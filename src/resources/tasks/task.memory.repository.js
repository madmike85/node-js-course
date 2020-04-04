let tasks = [
  {
    id: '1',
    title: 'Title',
    oreder: 12,
    description: 'Test task',
    userId: '1',
    boardId: '1',
    columnId: '1'
  },
  {
    id: '2',
    title: 'Title 2',
    oreder: 122,
    description: 'Test task 2',
    userId: '2',
    boardId: '2',
    columnId: '1'
  }
];

const getAll = async () => {
  return tasks;
};

const getById = async id => {
  return tasks.find(task => task.id === id);
};

const create = async task => {
  tasks.push(task);
};

const deleteById = async id => {
  tasks = tasks.filter(task => task.id !== id);
};

const deleteByBoardId = async boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

const update = async (id, data) => {
  const index = tasks.findIndex(task => task.id === id);
  tasks[index] = { ...tasks[index], ...data };
};

const updateByUserId = async userId => {
  tasks = tasks.map(task => {
    if (task.userId === userId) {
      task.userId = null;
    }

    return task;
  });
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  deleteByBoardId,
  update,
  updateByUserId
};
