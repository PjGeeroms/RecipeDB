export default function RecipeConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider
  .state('app.recipe', {
    url: '/recipes',
    controller: 'RecipeController as $ctrl',
    templateUrl: 'recipe/recipe.html',
    title: 'Recipes',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      },
      recipes: function(Recipes) {
        return Recipes.getRecipes();
      }
    }
  });
}
