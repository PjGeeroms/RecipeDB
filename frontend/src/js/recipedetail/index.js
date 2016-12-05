import angular from 'angular';

// Create the home module where our functionality can attach to
let recipeDetailModule = angular.module('app.recipedetail', []);


// Include our UI-Router config settings
import RecipeDetailConfig from './recipedetail.config';
recipeDetailModule.config(RecipeDetailConfig);

// Controllers
import RecipeDetailController from './recipedetail.controller';
recipeDetailModule.controller('RecipeDetailController', RecipeDetailController);

export default recipeDetailModule;
