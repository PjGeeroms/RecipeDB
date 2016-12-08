class AuthController {

  constructor(User, $state, AppConstants) {
    'ngInject';

    this._AppConstants = AppConstants;
    this.title = $state.current.title;
    this._User = User;
    this._$state = $state;
    this.authType = $state.current.name.replace('app.', '');
    this.formData = {
      username: "",
      email: "",
      password: "",
      registerKey: ""
    }
    this.errors = {
      username: "",
      email: "",
      password: "",
      registerKey: ""
    };
  }

  submitForm() {
    if (this.authType == 'register') {

      var validForm = true;
      var regex = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }

      if (!(this.formData.registerKey === this._AppConstants.registerKey) || !(this.formData.registerKey.length > 0)){
        this.errors.registerKey = "The key provided was invalid";
        validForm = false;
      } else {
        this.errors.registerKey = "";
      }
      if(!(this.formData.username.length >= 2)) {
        this.errors.username = "Username should have at least 2 characters";
        validForm = false;
      } else {
        this.errors.username = "";
      }
      if(!(regex.email.test(this.formData.email))) {
        this.errors.email = "The provided email address was invalid";
        validForm = false;
      } else {
        this.errors.email = "";
      }
      if(!(this.formData.password.length >= 5)) {
        this.errors.password = "Password should have at least 5 characters";
        validForm = false;
      } else {
        this.errors.password = "";
      }
      if(!validForm) {
        return;
      }
    }

    this.isSubmitting = true;
    this._User.attemptAuth(this.authType, this.formData).then(
      () => {
        this._$state.go('app.recipe');
      },
      (err) => {
        console.log(err);
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );
  }
}

export default AuthController;
