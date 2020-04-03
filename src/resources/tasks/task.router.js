const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const Task = require('./task.model');

router
  .route('/')
  .get(async (req, res) => {
    const tasks = await tasksService.getAll();
    res.json(tasks);
  })
  .post(async (req, res) => {
    const task = new Task({ ...req.body, boardId: req.params.boardId });
    await tasksService.create(task);
    res.json({ message: 'Task has been created' });
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const task = await tasksService.getById(req.params.id);
    res.json(task);
  })
  .delete(async (req, res) => {
    await tasksService.deleteById(req.params.id);
    res.json({ message: 'Task has been deleted' });
  })
  .put(async (req, res) => {
    await tasksService.update(req.params.id, req.body);
    res.json({ message: 'Task has been updated' });
  });

module.exports = router;
