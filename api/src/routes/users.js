const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().from('users').orderBy('user_id'));
});

router.post('/newUser', async (req, res) => {
  res.send(
    await db('users').insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      PPrivacy_id: req.body.PPrivacy_id,
    })
  );
  console.log(req.url);
  console.log(req.method);
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);

  res.send('Create Ok');
});

router.get('/:id', async (req, res) => {
  res.send(
    await db
      .select()
      .from('users')
      .where('user_id', req.params.id)
      .orderBy('user_id')
  );
});

router.put('/:id', (req, res) => {
  // TODO: implement me

  res.send('Update Ok');
});

router.delete('/:id', (req, res) => {
  // TODO: implement me

  res.send('Delete Ok');
});

module.exports = router;
