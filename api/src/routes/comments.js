const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().from('comments').orderBy('comment_id'));
});

router.get('/:id', async (req, res) => {
  res.send(
    await db
      .select()
      .from('comments')
      .where('comment_id', req.params.id)
      .orderBy('comment_id')
  );
});

router.post('/newComment', async (req, res) => {
  res.send(
    await db('comments').insert({
      date: req.body.date,
      description: req.body.description,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    })
  );
  console.log(req.body);
});

router.put('/:id', async (req, res) => {
  res.sendStatus(200).send(
    await db('comments').where('comment_id', req.params.id).update({
      date: req.body.date,
      description: req.body.description,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    })
  );
});

router.delete('/:id', async (req, res) => {
  res
    .sendStatus(200)
    .send(await db('comments').where('comment_id', req.params.id).del());
});

module.exports = router;
