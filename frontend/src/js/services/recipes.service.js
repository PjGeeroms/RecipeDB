export default class Recipes {

  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  save(recipe){
    let request = {};
    if (recipe.slug) {
      request.url = `${this._AppConstants.api}/recipes/${recipe.slug}`;
      request.method = 'PUT';

      // Delete the slug from the article to ensure the server updates the slug,
      // which happens if the title of the article changed.
      delete recipe.slug;

      // Otherwise it's a new article, add it with post
    } else {
      request.url = `${this._AppConstants.api}/recipes`;
      request.method = 'POST';
    }

    // Set the article data in the data attribute of our request
    request.data = { recipe: recipe };

    return this._$http(request).then((res) => res.data.recipe );
  }

  getRecipe(slug) {
    let deferred = this._$q.defer();

    // Check for blank title
    if (!slug.replace(" ", "")) {
      deferred.reject("Recipe slug is empty");
      return deferred.promise;
    }

    return this._$http({
      url: this._AppConstants.api + '/recipes/' + slug,
      method: 'GET'
    }).then(
      (res) => res.data,
      (err) => err.data
    );

  }

  getRecipes() {
    let request = {};
    request.url = `${this._AppConstants.api}/recipes/`;
    request.method = 'GET';

    // Set the article data in the data attribute of our request
    //request.data = { recipe: recipe };

    return this._$http(request).then(
      (res) => res.data,
      (err) => err.data
    );
  }

  getRecipesByFilter(filter) {
    let request = {};
    request.url = `${this._AppConstants.api}/recipes/filter/` + filter;
    request.method = 'GET';

    return this._$http(request).then(
      (res) => res.data,
      (err) => err.data
    )
  }

  deleteRecipe(recipe) {
    let request = {};
    request.url = `${this._AppConstants.api}/recipes/` + recipe.slug;
    request.method = 'DELETE';

    return this._$http(request).then(
      (res) => res.data,
      (err) => err.data
    );
  }
}
