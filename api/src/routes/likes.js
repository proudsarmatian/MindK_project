const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().from('likes').orderBy('like_id'));
});

router.get('/:id', async (req, res) => {
  res.send(
    await db
      .select()
      .from('likes')
      .where('like_id', req.params.id)
      .orderBy('like_id')
  );
});

router.post('/newLike', async (req, res) => {
  res.send(
    await db('likes').insert({
      user_id: req.body.user_id,
      post_id: req.body.post_id,
    })
  );
  console.log(req.body);
});

router.put('/:id', async (req, res) => {
  res.sendStatus(200).send(
    await db('likes').where('like_id', req.params.id).update({
      user_id: req.body.user_id,
      post_id: req.body.post_id,
    })
  );
});

router.delete('/:id', async (req, res) => {
  res
    .sendStatus(200)
    .send(await db('likes').where('like_id', req.params.id).del());
});

module.exports = router;
