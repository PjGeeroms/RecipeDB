function EditorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.editor', {
    url: '/editor/:slug',
    controller: 'EditorController',
    controllerAs: '$ctrl',
    templateUrl: 'editor/editor.html',
    title: 'Editor',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      },
      recipe: function(Recipes, User, $state, $stateParams) {
        // If we're trying to edit an article
        if ($stateParams.slug) {
          return Recipes.getRecipe($stateParams.slug).then(
            (recipe) => {
              // If current user is author, resolve data
              if (User.current.username === recipe.author.username) {
                return recipe;
                // Redirect to homepage
              } else {
                $state.go('app.editor');
              }
            },
            // If an error occurs -> redirect to homepage
            () => $state.go('app.recipe')
          );
          // If new article
        } else {
          return null;
        }
      }
    }
  });
}

export default EditorConfig;
