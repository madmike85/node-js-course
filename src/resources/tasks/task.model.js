const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'Title',
    order = 12,
    description = 'Description',
    userId = '1254q',
    boardId = '1254g',
    columnId = '1245f'
  }) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
