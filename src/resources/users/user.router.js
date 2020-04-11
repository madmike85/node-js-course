const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../tasks/task.service');
const { catchAsyncError } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    catchAsyncError(async (req, res) => {
      const users = await usersService.getAll();
      res.status(200).json(users.map(User.toResponse));
    })
  )
  .post(
    catchAsyncError(async (req, res) => {
      const user = new User(req.body);
      await usersService.create(user);
      res.status(200).json(User.toResponse(user));
    })
  );

router
  .route('/:id')
  .get(
    catchAsyncError(async (req, res) => {
      const user = await usersService.getById(req.params.id);
      res.status(200).json(User.toResponse(user));
    })
  )
  .delete(
    catchAsyncError(async (req, res) => {
      await tasksService.updateByUserId(req.params.id);
      await usersService.deleteById(req.params.id);
      res.status(200).json({ message: 'User has been deleted' });
    })
  )
  .put(
    catchAsyncError(async (req, res) => {
      await usersService.update(req.params.id, req.body);
      res.status(200).json({ message: 'User has been updated' });
    })
  );

module.exports = router;
