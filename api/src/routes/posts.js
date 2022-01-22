const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().from('posts').orderBy('post_id'));
});

router.get('/:id', async (req, res) => {
  res.send(
    await db
      .select()
      .from('posts')
      .where('post_id', req.params.id)
      .orderBy('post_id')
  );
});

router.post('/newPost', async (req, res) => {
  res.send(
    await db('posts').insert({
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
      user_id: req.body.user_id,
      PostP_id: req.body.PostP_id,
    })
  );
  console.log(req.body);
});

router.put('/:id', async (req, res) => {
  res.sendStatus(200).send(
    await db('posts').where('post_id', req.params.id).update({
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
      user_id: req.body.user_id,
      PostP_id: req.body.PostP_id,
    })
  );
});

router.delete('/:id', async (req, res) => {
  res
    .sendStatus(200)
    .send(await db('posts').where('post_id', req.params.id).del());
});

module.exports = router;
