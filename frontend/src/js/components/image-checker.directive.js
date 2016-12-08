export default function ImageChecker() {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      image: "="
    },
    link: function(scope, element){

      if (scope.image.length > 0) {
        angular.element(element).css({
          'background-image' : 'url(' + scope.image + ')'
        });
      } else {
        angular.element(element).addClass('no-image');

        // angular.element(element).css({
        //   'background-image' : 'url(../img/image-upload.png)',
        //   'background-size' : '30%',
        //   'background-repeat' : 'no-repeat'
        // });
      }
    }
  };
}
