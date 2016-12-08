export default function AutoComplete($compile) {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      value: "=",
      keyup: "&",
      list: "="
    },
    link: function(scope){
      var smartList = angular.element('#smartList');

      // Hide smartlist on unfocus

      scope.$watch('value', function(newValue) {

        if (newValue.length >= 1) {
          smartList.addClass("showing");

          //Execute method in parent controller
          scope.keyup({filter: newValue});

          var listNode = $compile(
            `
              <li ng-repeat="item in list" class="item">
                <a href="/#/recipes/{{item.slug}}">
                  {{item.title}}
                </a>
              </li>
            `
          )(scope);

          //Add list items to list
          smartList.html(listNode);
        }
        if (newValue.length == 0) {
          smartList.removeClass("showing");
        }
      });
    }
  };
}
