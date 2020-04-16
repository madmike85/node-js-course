const router = require('express').Router();
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');
const Board = require('./board.model');
const { catchAsyncError, createError } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    catchAsyncError(async (req, res) => {
      await boardsService.getAll().then(boards => {
        res.status(200).json(boards.map(Board.toResponse));
      });
    })
  )
  .post(
    catchAsyncError(async (req, res) => {
      await boardsService.create(req.body).then(board => {
        res.status(200).json(Board.toResponse(board));
      });
    })
  );

router
  .route('/:id')
  .get(
    catchAsyncError(async (req, res, next) => {
      await boardsService
        .getById(req.params.id)
        .then(board => {
          if (!board) {
            throw new Error();
          }
          res.status(200).json(Board.toResponse(board));
        })
        .catch(() => {
          const error = createError('Board not found', 404);
          next(error);
        });
    })
  )
  .delete(
    catchAsyncError(async (req, res, next) => {
      await tasksService.deleteByBoardId(req.params.id);
      await boardsService
        .deleteById(req.params.id)
        .then(board => {
          if (!board) {
            throw new Error();
          }
          res.status(200).json({ message: 'Board has been deleted' });
        })
        .catch(() => {
          const error = createError('Board not found', 404);
          next(error);
        });
    })
  )
  .put(
    catchAsyncError(async (req, res, next) => {
      await boardsService
        .update(req.params.id, req.body)
        .then(board => {
          if (!board) {
            throw new Error();
          }
          res.status(200).json({ message: 'Board has been updated' });
        })
        .catch(() => {
          const error = createError('Board not found', 404);
          next(error);
        });
    })
  );

module.exports = router;
