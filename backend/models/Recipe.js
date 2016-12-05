var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var User = mongoose.model('User');
var slug = require('slug');

var RecipeSchema = new mongoose.Schema({
  slug: {type: String, unique: true},
  title: String,
  ingredients: [{type: String}],
  body: String,
  image: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

RecipeSchema.plugin(uniqueValidator, {message: 'is already taken'});

RecipeSchema.pre('validate', function(next, done){
  this.slugify();

  next();
});

RecipeSchema.methods.slugify = function() {
  // string = this:title
  // slug = slug(string)
  // while slug exits
  //   string = convertstring
  //   slug = slug(string)
  // this.slug = slug(this.title);
  // this.find({slug: this.slug}).then(
  //
  // );
  this.slug = slug(this.title);
};

RecipeSchema.methods.toJSONFor = function(){
  return {
    slug: this.slug,
    title: this.title,
    ingredients: this.ingredients,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    author: this.author.toProfileJSONFor()
  };
};

mongoose.model('Recipe', RecipeSchema);
