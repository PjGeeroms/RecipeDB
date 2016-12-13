class AppHeaderCtrl {
  constructor(AppConstants, User, $state, $scope, $rootScope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.logout = User.logout.bind(User);
    this.state = $state.current.name.replace('app.', '');
    this.user = User.current;

    var vm = this; // bind scope
    //  watch changes on statechange
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams ){
      vm.state = toState.name.replace('app.', '');
    });

    //  watch user change
    $scope.$watch('User.current', (newUser) => {
      this.user = newUser;
    });

  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
