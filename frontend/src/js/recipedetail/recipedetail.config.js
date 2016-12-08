export default function RecipeDetailConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider
  .state('app.recipedetail', {
    url: '/recipes/:slug',
    controller: 'RecipeDetailController as $ctrl',
    templateUrl: 'recipedetail/recipedetail.html',
    title: "Recipe",
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      },
      recipe: function(Recipes, $stateParams) {
        return Recipes.getRecipe($stateParams.slug)
      }
    }
  });
}
