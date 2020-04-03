const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = new User(req.body);
    await usersService.addUser(user);
    res.json({ message: 'User has been added' });
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await usersService.getUser(req.params.id);
    res.json(User.toResponse(user));
  })
  .delete(async (req, res) => {
    await usersService.deleteUser(req.params.id);
    res.json({ message: 'User has been deleted' });
  })
  .put(async (req, res) => {
    await usersService.updateUser(req.params.id, req.body);
    res.json({ message: 'User has been updated' });
  });

module.exports = router;
