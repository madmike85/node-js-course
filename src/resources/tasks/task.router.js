const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const Task = require('./task.model');
const { catchAsyncError } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    catchAsyncError(async (req, res) => {
      const tasks = await tasksService.getAll();
      res.status(200).json(tasks);
    })
  )
  .post(
    catchAsyncError(async (req, res) => {
      const task = new Task({ ...req.body, boardId: req.params.boardId });
      await tasksService.create(task);
      res.status(200).json(task);
    })
  );

router
  .route('/:id')
  .get(
    catchAsyncError(async (req, res) => {
      const task = await tasksService.getById(req.params.id);
      if (!task) {
        res.status(404).json({ message: 'Task not found' });
      } else {
        res.status(200).json(task);
      }
    })
  )
  .delete(
    catchAsyncError(async (req, res) => {
      await tasksService.deleteById(req.params.id);
      res.status(200).json({ message: 'Task has been deleted' });
    })
  )
  .put(
    catchAsyncError(async (req, res) => {
      await tasksService.update(req.params.id, req.body);
      res.status(200).json({ message: 'Task has been updated' });
    })
  );

module.exports = router;
