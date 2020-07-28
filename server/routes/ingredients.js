const router = require('express').Router();
const Ingredient = require('../models/Ingredient');

router.route('/').get((req, res) => {
  Ingredient.find()
    .sort( { name: 1 } )
    .then((ingredients) => res.json(ingredients))
    .catch((err) => console.log(err));
});

module.exports = router;