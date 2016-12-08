export default function DescriptionValidator() {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      value: "=",
      errors: "="
    },
    link: function(scope){

      scope.$watch('value', function(newValue){
        if (newValue.length > 1 || newValue.length == 0) {
          scope.errors.description = "";
        } else {
          scope.errors.description = "Description has to be longer then 1 character";
        }
      });
    }
  };
}
