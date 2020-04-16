const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../tasks/task.service');
const { catchAsyncError, createError } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    catchAsyncError(async (req, res) => {
      await usersService.getAll().then(users => {
        res.status(200).json(users.map(User.toResponse));
      });
    })
  )
  .post(
    catchAsyncError(async (req, res) => {
      await usersService.create(req.body).then(user => {
        res.status(200).json(User.toResponse(user));
      });
    })
  );

router
  .route('/:id')
  .get(
    catchAsyncError(async (req, res, next) => {
      await usersService
        .getById(req.params.id)
        .then(user => {
          res.status(200).json(User.toResponse(user));
        })
        .catch(() => {
          const error = createError('User not found', 404);
          next(error);
        });
    })
  )
  .delete(
    catchAsyncError(async (req, res, next) => {
      await tasksService.updateByUserId(req.params.id);
      await usersService
        .deleteById(req.params.id)
        .then(user => {
          if (!user) {
            throw new Error();
          }
          res.status(200).json({ message: 'User has been deleted' });
        })
        .catch(() => {
          const error = createError('User not found', 404);
          next(error);
        });
    })
  )
  .put(
    catchAsyncError(async (req, res, next) => {
      await usersService
        .update(req.params.id, req.body)
        .then(user => {
          if (!user) {
            throw new Error();
          }
          res.status(200).json({ message: 'User has been updated' });
        })
        .catch(() => {
          const error = createError('User not found', 404);
          next(error);
        });
    })
  );

module.exports = router;
