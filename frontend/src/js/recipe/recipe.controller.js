export default class RecipeController {

  constructor(Recipes, recipes, $window) {
    'ngInject';
    this._Recipes = Recipes;
    this._$window = $window;
    this.recipes = recipes;
    this.searchbar = "";
    this.autoList = [];
    
  }

  autoComplete(filter) {
    this._Recipes.getRecipesByFilter(filter).then(
      (val) => this.autoList = val,
      (err) => this.autoList.push(err)
    );
  }

}
