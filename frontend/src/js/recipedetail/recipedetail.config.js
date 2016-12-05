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
      recipe: function(Recipes, $stateParams) {
        console.log($stateParams);
        return Recipes.getRecipe($stateParams.slug)
      }
    }
  });
}
