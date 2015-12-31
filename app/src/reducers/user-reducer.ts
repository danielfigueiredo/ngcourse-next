import * as userConstants from '../constants/user-contants';

const userInitialState = {
    isAuthenticated: false
};

function login (state, action): any {
  switch (action.type) {
    case userConstants.LOGIN_USER:
      if (action.username === 'alice' && action.password === 'alice') {
        return {
          isAuthenticated: true,
          username: 'alice',
          displayName: 'Alice Bleeblebrox'
        };
      }
    case userConstants.LOGOUT_USER:
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default (state: any = userInitialState, action: any) => {
  switch (action.type) {
    case userConstants.LOGIN_USER:
    case userConstants.LOGOUT_USER:
      return login(state, action);
    default:
      return state;
  }
}
