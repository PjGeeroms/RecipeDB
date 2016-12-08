class HomeCtrl {
  constructor(AppConstants, $location) {
    'ngInject';

    this.appName = AppConstants.appName;
    $location.path('/recipes');
  }


}

export default HomeCtrl;
