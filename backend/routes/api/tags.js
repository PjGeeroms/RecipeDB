var router = require('express').Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

// return a list of linked recipes
router.get('/linkedRecipes', function(req, res, next) {
  Recipe.find().distinct('linkedRecipes').then(function(linkedRecipes){
    return res.json({linkedRecipes: linkedRecipes});
  }).catch(next);
});

router.get('/', function(req, res, next) {
  Recipe.find().distinct('ingredients').then(function(ingredients){
    return res.json({ingredients: ingredients});
  }).catch(next);
});

module.exports = router;
