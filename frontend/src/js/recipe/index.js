import angular from 'angular';

// Create the home module where our functionality can attach to
let recipeModule = angular.module('app.recipe', []);


// Include our UI-Router config settings
import RecipeConfig from './recipe.config';
recipeModule.config(RecipeConfig);

// Controllers
import RecipeController from './recipe.controller';
recipeModule.controller('RecipeController', RecipeController);

export default recipeModule;
