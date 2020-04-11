const router = require('express').Router();
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');
const Board = require('./board.model');
const { catchAsyncError } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    catchAsyncError(async (req, res) => {
      const boards = await boardsService.getAll();
      res.status(200).json(boards);
    })
  )
  .post(
    catchAsyncError(async (req, res) => {
      const board = new Board(req.body);
      await boardsService.create(board);
      res.status(200).json(board);
    })
  );

router
  .route('/:id')
  .get(
    catchAsyncError(async (req, res) => {
      const board = await boardsService.getById(req.params.id);
      if (!board) {
        res.status(404).json({ message: 'Board not found' });
      } else {
        res.status(200).json(board);
      }
    })
  )
  .delete(
    catchAsyncError(async (req, res) => {
      await tasksService.deleteByBoardId(req.params.id);
      await boardsService.deleteById(req.params.id);
      res.status(200).json({ message: 'Board has been deleted' });
    })
  )
  .put(
    catchAsyncError(async (req, res) => {
      await boardsService.update(req.params.id, req.body);
      res.status(200).json({ message: 'User has been updated' });
    })
  );

module.exports = router;
