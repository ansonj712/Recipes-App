const router = require('express').Router();
const Ingredient = require('../models/ingredients');

router.route('/').get((req, res) => {
  Ingredient.find()
    .then((ingredients) => res.json(ingredients))
    .catch((err) => console.log(err));
});

module.exports = router;