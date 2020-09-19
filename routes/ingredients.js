import express from 'express';
import Ingredient from '../models/Ingredient.js';

const router = express.Router();

router.route('/').get((req, res) => {
  Ingredient.find()
    .sort( { name: 1 } )
    .then((ingredients) => res.json(ingredients))
    .catch((err) => console.log(err));
});

export default router;