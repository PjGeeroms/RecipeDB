var router = require('express').Router();
var passport = require('passport');
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload recipe objects on routes with ':recipe'
router.param('recipe', function(req, res, next, slug) {
  Recipe.findOne({ slug: slug})
    .populate('author')
    .then(function (recipe) {
      if (!recipe) { return res.sendStatus(404); }

      req.recipe = recipe;

      return next();
    }).catch(next);
});

// Get all recipes
router.get('/', auth.required, function(req, res, next) {
  var limit = 20;
  var offset = 0;

  if (typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if (typeof req.query.offset !== 'undefined') {
    offset = req.query.offset;
  }

  Recipe.find().limit(limit).skip(offset).populate('author').then(function (recipes) {
    return res.json(recipes);
  }).catch(next);
});

// Get one recipe
router.get('/:recipe', auth.required, function (req, res, next){
  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.recipe.populate('author').execPopulate()
  ]).then(function(results){
    var user = results[0];
    return res.json(req.recipe.toJSONFor());
  }).catch(next);
});


// Get recipes filtered
router.get('/filter/:filtered', auth.required, function(req, res){
  var filter = req.params.filtered;
  var limit = 5;

  if (filter != null) {
    Recipe.find({"title" : {"$regex" : filter, "$options": "i"}}).limit(limit).then(function (recipes){
      return res.json(recipes);
    });
  } else {
    return res.sendStatus(200);
  }

});

// Add a recipe
router.post('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var recipe = new Recipe(req.body.recipe);
    console.log(recipe);
    recipe.author = user;

    return recipe.save().then(function(){
      console.log(recipe.author);
      return res.json({recipe: recipe.toJSONFor()});
    });
  }).catch(next);
});


// update recipe
router.put('/:recipe', auth.required, function(req, res, next) {
  if(req.recipe.author._id.toString() === req.payload.id.toString()){
    console.log(req.body.recipe.instructions);
    // Validate new recipe
    if(typeof req.body.recipe.title !== 'undefined'){
      req.recipe.title = req.body.recipe.title;
    }

    if(typeof req.body.recipe.body !== 'undefined'){
      req.recipe.body = req.body.recipe.body;
    }

    if( typeof req.body.recipe.ingredients !== 'undefined' ){
      req.recipe.ingredients = req.body.recipe.ingredients;
    }

    if(typeof req.body.recipe.image != 'undefined'){
      req.recipe.image = req.body.recipe.image;
    }

    if(typeof req.body.recipe.portions != 'undefined'){
      req.recipe.portions = req.body.recipe.portions;
    }

    if(typeof req.body.recipe.instructions != 'undefined'){
      req.recipe.instructions = req.body.recipe.instructions;
    }

    req.recipe.save().then(function(recipe){
      return res.json({recipe: recipe.toJSONFor()});
    }).catch(next);
  } else {
    return res.sendStatus(403);
  }
});

// delete recipe
router.delete('/:recipe', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(){
    if(req.recipe.author._id.toString() === req.payload.id.toString()){
      return req.recipe.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  });
});

module.exports = router;
