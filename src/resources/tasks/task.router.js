const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const Task = require('./task.model');
const { catchAsyncError, createError } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    catchAsyncError(async (req, res) => {
      await tasksService.getAll(req.params.boardId).then(tasks => {
        res.status(200).json(tasks.map(Task.toResponse));
      });
    })
  )
  .post(
    catchAsyncError(async (req, res) => {
      const newTask = new Task({ ...req.body, boardId: req.params.boardId });
      await tasksService.create(newTask).then(task => {
        res.status(200).json(Task.toResponse(task));
      });
    })
  );

router
  .route('/:id')
  .get(
    catchAsyncError(async (req, res, next) => {
      await tasksService
        .getById(req.params.id)
        .then(task => {
          if (!task) {
            throw new Error();
          }
          res.status(200).json(Task.toResponse(task));
        })
        .catch(() => {
          const error = createError('Task not found', 404);
          next(error);
        });
    })
  )
  .delete(
    catchAsyncError(async (req, res, next) => {
      await tasksService
        .deleteById(req.params.id)
        .then(task => {
          if (!task) {
            throw new Error();
          }
          res.status(200).json({ message: 'Task has been deleted' });
        })
        .catch(() => {
          const error = createError('Task not found', 404);
          next(error);
        });
    })
  )
  .put(
    catchAsyncError(async (req, res, next) => {
      await tasksService
        .update(req.params.id, req.body)
        .then(task => {
          if (!task) {
            throw new Error();
          }
          res.status(200).json({ message: 'Task has been updated' });
        })
        .catch(() => {
          const error = createError('Task not found', 404);
          next(error);
        });
    })
  );

module.exports = router;
