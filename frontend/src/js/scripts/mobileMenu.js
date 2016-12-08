angular.element(document).ready(function(){

  var windowWidth = angular.element(window).innerWidth();
  if (windowWidth < 775) {
    angular.element('#mobileMenu').removeClass('hidden');
    angular.element('.nav').addClass('hidden');
  }

  angular.element(window).resize(function(){
      console.log(window.innerWidth);
      if (window.innerWidth < 775) {
        angular.element("#mobileMenu").removeClass('hidden');
        angular.element('.nav').addClass('hidden');
      } else {
        angular.element("#mobileMenu").addClass('hidden');
        angular.element('.nav').removeClass('hidden');
      }
  });

  angular.element('#mobileMenu').on('click', function(){
    angular.element("#mobileMenu").addClass('hidden');
    angular.element('.nav').removeClass('hidden');

    angular.element('.nav li a').on('click', function(){
      angular.element("#mobileMenu").removeClass('hidden');
      angular.element('.nav').addClass('hidden');
    });
  });


});
