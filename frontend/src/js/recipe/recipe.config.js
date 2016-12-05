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
      recipes: function(Recipes) {
        return Recipes.getRecipes();
      }
    }
  });
}
