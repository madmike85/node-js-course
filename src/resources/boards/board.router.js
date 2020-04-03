const router = require('express').Router();
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');
const Board = require('./board.model');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
  .post(async (req, res) => {
    const board = new Board(req.body);
    await boardsService.create(board);
    res.json({ message: 'Board has been created' });
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const board = await boardsService.getById(req.params.id);
    res.json(board);
  })
  .delete(async (req, res) => {
    await tasksService.deleteByBoardId(req.params.id);
    await boardsService.deleteById(req.params.id);
    res.json({ message: 'Board has been deleted' });
  })
  .put(async (req, res) => {
    await boardsService.update(req.params.id, req.body);
    res.json({ message: 'User has been updated' });
  });

module.exports = router;
