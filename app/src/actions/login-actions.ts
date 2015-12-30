import * as loginConstants from '../constants/login-contants';

export var doLogin = (loginObj) => {
  return {
    type: loginConstants.LOGIN_USER,
    username: loginObj.username,
    password: loginObj.password
  };
}

export var doLogout = () => {
  return {
    type: loginConstants.LOGOUT_USER
  }
};