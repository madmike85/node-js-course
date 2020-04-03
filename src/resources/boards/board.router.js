const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
  .post(async (req, res) => {
    const board = new Board(req.body);
    await boardsService.addBoard(board);
    res.json({ message: 'Board has been added' });
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const board = await boardsService.getBoard(req.params.id);
    res.json(board);
  })
  .delete(async (req, res) => {
    await boardsService.deleteBoard(req.params.id);
    res.json({ message: 'Board has been deleted' });
  })
  .put(async (req, res) => {
    await boardsService.updateBoard(req.params.id, req.body);
    res.json({ message: 'User has been updated' });
  });

module.exports = router;
