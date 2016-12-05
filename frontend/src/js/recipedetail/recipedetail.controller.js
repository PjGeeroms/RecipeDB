export default class RecipeDetailController {

  constructor(Recipes, recipe, $window) {
    'ngInject';
    this._Recipes = Recipes;
    this._$window = $window;
    this.recipe = recipe;


  }
}
