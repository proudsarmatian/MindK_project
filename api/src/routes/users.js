const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().from('users').orderBy('user_id'));
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
});


router.put('/:id', async (req, res) => {
  res.sendStatus(200).send(
    await db('users').where('user_id', req.params.id).update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      PPrivacy_id: req.body.PPrivacy_id,
    })
  );
});

router.delete('/:id', async (req, res) => {
  res
    .sendStatus(200)
    .send(await db('users').where('user_id', req.params.id).del());
});

module.exports = router;
