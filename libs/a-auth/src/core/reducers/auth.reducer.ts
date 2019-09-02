import { AuthStatusTypes } from './../interfaces/auth.interfaces';
import { AuthActions, AuthActionTypes } from './../actions/auth.actions';
import { AuthState } from './../state/auth.state';

export const loginInitialState: AuthState = {
  status: AuthStatusTypes.NOT_AUTHENTICATEED,
}

export function authReducer(state: AuthState = loginInitialState, action: AuthActions): AuthState {
  switch(action.type) {
    case AuthActionTypes.LOGIN_FAILED:
      return {
        ...state,
        status: AuthStatusTypes.NOT_AUTHENTICATEED
      };
    case AuthActionTypes.LOGIN_SUCCESSFUL:
      return {
        ...state,
        status: AuthStatusTypes.AUTHENTICATEED
      };
    default:
      return state;
  }
}
