import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// components
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

// directives
import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import EditableRow from './editable-row.directive';
componentsModule.directive('editableRow', EditableRow);

import AutoComplete from './autocomplete.directive';
componentsModule.directive('autoComplete', AutoComplete);


export default componentsModule;
