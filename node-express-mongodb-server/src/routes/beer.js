import { Router } from 'express';

const router = Router();

router.get('/v1/todos', async (req, res) => {
  const beers = await req.context.models.Beer.find();
  return res.send(beers);
});

router.get('/:beerId', async (req, res) => {
  const beer = await req.context.models.Beer.findById(
    req.params.beerId,
  );
  return res.send(beer);
});

router.post('/', async (req, res) => {
  const beer = await req.context.models.Beer.create({
    text: req.body.text,
    user: req.context.me.id,
  });

  return res.send(beer);
});

router.delete('/:beerId', async (req, res) => {
  const beer = await req.context.models.Beer.findById(
    req.params.beerId,
  );

  let result = null;
  if (beer) {
    result = await beer.remove();
  }

  return res.send(result);
});

export default router;
