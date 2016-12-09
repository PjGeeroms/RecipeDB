export default class RecipeDetailController {

  constructor(Recipes, recipe, $window, User, $state) {
    'ngInject';
    this._Recipes = Recipes;
    this._$window = $window;
    this.recipe = recipe;
    this._$state = $state;

    if (User.current) {
      this.isUser = (User.current.username === this.recipe.author.username);
    } else {
      this.isUser = false;
    }
  }

  deleteRecipe() {
    if(this._$window.confirm('Are you sure?')){
      this._Recipes.deleteRecipe(this.recipe);
      this._$state.go('app.recipe');
    }
  }
}
