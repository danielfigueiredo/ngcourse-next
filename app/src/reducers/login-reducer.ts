import * as loginConstants from '../constants/login-contants';

export default (state: any = {isAuthenticated: false}, action: any) => {
  switch (action.type) {
    case loginConstants.LOGIN_USER:
      if (action.username === 'alice' && action.password === 'alice') {
        return {
          isAuthenticated: true,
          displayName: 'Alice Bleeblebrox'
        };
      }
    case loginConstants.LOGOUT_USER:
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
}
