class AppHeaderCtrl {
  constructor(AppConstants, User, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.logout = User.logout.bind(User);
    this.state = $state.current.name.replace('app.', '');
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
