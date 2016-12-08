export default function IngredientBuilder() {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      ingredients : "="
    },
    link: function(scope, element){
      let ingredients = scope.ingredients;
      let length = ingredients.length
      var remaining;
      var subList;
      var ingredientString = "";

      // More then 6 elements
      if(length > 6) {
        remaining = length - 6;
        subList = ingredients.splice(0, 6);

        for (var i = 0; i < subList.length; i++) {
          if (i == subList.length - 1) {
            ingredientString += subList[i] + " ";
          } else {
            ingredientString += subList[i] + ", ";
          }
        }
        ingredientString += "<strong>and " + remaining + " more</strong>";

        // Less than 6 elements
      } else {
        for (var j = 0; j < length -1; j++) {
          if (j == length - 2) {
            ingredientString += ingredients[j] + " ";
          } else {
            ingredientString += ingredients[j] + ", ";
          }
        }
        ingredientString += " and " + ingredients.pop();
      }

      angular.element(element).append(ingredientString);

    }
  };
}
