export default function ImageChanger() {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      image: "=",
      recipeimage: "="
    },
    link: function(scope){
      let rgx = /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/;

      // Remove image
      angular.element('#closeButton').on('click', function(){
        angular.element('#addImageBox').animate({
          opacity : 1
        }, 1000);
        scope.image = "";
        scope.recipeimage = "";
        angular.element('#editorHeroImage')
          .removeClass('editor-hero-image')
          .css({
            'background-image' : ''
          })
          .addClass('editor-hero-image-upload');
        angular.element('#closeButton').addClass('hidden');
        angular.element('#recipeTitle').css({
          "color": "#6c6c6c"
        });
      });

      scope.$watch('image', function(newValue) {
        // Add image
        if (rgx.test(newValue)) {
          scope.recipeimage = newValue;
          scope.image = "";
          angular.element('#editorHeroImage')
            .css({
              "background-image" : "url(" + newValue + ")"
            });

            // Hide image input field
            // Show close button
            angular.element('#addImageBox').animate({
              opacity : 0
            }, 1000);
            angular.element('#closeButton').removeClass('hidden');

            // Change color of recipe title
            angular.element('#recipeTitle').css({
              "color" : "#f7f7f7"
            });

            // Add linear gradient to background
            angular.element('#editorHeroImage')
              .removeClass('editor-hero-image-upload')
              .addClass('editor-hero-image');
        }

      });
    }
  };
}
