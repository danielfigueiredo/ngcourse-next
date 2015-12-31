import * as userConstants from '../constants/user-contants';

export var doLogin = (loginObj) => {
  return {
    type: userConstants.LOGIN_USER,
    username: loginObj.username,
    password: loginObj.password
  };
}

export var doLogout = () => {
  return {
    type: userConstants.LOGOUT_USER
  }
};