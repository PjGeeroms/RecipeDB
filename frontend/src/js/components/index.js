import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// components
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

// directives
import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import AutoComplete from './autocomplete.directive';
componentsModule.directive('autoComplete', AutoComplete);

import ImageChanger from './image-changer.directive';
componentsModule.directive('imageChanger', ImageChanger);

import ImageChecker from './image-checker.directive';
componentsModule.directive('imageChecker', ImageChecker);

import DescriptionValidator from './description-validator.directive';
componentsModule.directive('descriptionValidator', DescriptionValidator);

import IngredientBuilder from './ingredient-builder.directive';
componentsModule.directive('ingredientBuilder', IngredientBuilder);

export default componentsModule;
