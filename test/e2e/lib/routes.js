module.exports = {
  users: {
    getAll: '/users',
    getById: id => `/users/${id}`,
    create: '/users',
    update: id => `/users/${id}`,
    deleteById: id => `/users/${id}`
  },
  tasks: {
    getAll: boardId => `/boards/${boardId}/tasks`,
    getById: (boardId, taskId) => `/boards/${boardId}/tasks/${taskId}`,
    create: boardId => `/boards/${boardId}/tasks`,
    update: (boardId, taskId) => `/boards/${boardId}/tasks/${taskId}`,
    deleteById: (boardId, taskId) => `/boards/${boardId}/tasks/${taskId}`
  },
  boards: {
    getAll: '/boards',
    getById: id => `/boards/${id}`,
    create: '/boards',
    update: id => `/boards/${id}`,
    deleteById: id => `/boards/${id}`
  },
  login: '/login'
};
