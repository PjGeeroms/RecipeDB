import angular from 'angular';

let filterModule = angular.module('app.filters', []);

// components
// import ListErrors from './list-errors.component';
// componentsModule.component('listErrors', ListErrors);

// filters
import Sort from './sort.filter';
filterModule.filter('sort', Sort);



export default filterModule;
