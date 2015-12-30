import * as loginConstants from '../constants/login-contants';

export default (state: any = {}, action: any) => {
  switch (action.type) {
    case loginConstants.LOGIN_USER:
      if (action.username === 'alice' && action.password === 'alice') {
        return {
          isAuthenticated: true
        };
      } else {
        return {
          isAuthenticated: false
        }
      }
    default:
      return state;
  }
}
