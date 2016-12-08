export default class RecipeDetailController {

  constructor(Recipes, recipe, $window, User) {
    'ngInject';
    this._Recipes = Recipes;
    this._$window = $window;
    this.recipe = recipe;

    if (User.current) {
      this.isUser = (User.current.username === this.recipe.author.username);
    } else {
      this.isUser = false;
    }
  }
}
