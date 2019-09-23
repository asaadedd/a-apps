import { LoginState } from '../state/login.state';
import { LoginActionTypes, LoginActions } from '../actions/login.actions';
import { OperationAdapter } from '../../../../a-operation/src/a-operation.adapter';

const operationAdapter = new OperationAdapter();
const loginInitialState: LoginState = {
    loginOperation: operationAdapter.getInitialState(),
};

export function loginReducer(state: LoginState = loginInitialState, action: LoginActions): LoginState {
    switch(action.type) {
        case LoginActionTypes.LOGIN:
            return {
                ...state,
                loginOperation: operationAdapter.inProgress(state.loginOperation)
            };
        case LoginActionTypes.LOGIN_FAILED:
            return {
                ...state,
                loginOperation: operationAdapter.failed(state.loginOperation)
            };
        case LoginActionTypes.LOGIN_SUCCESSFUL:
            return {
                ...state,
                loginOperation: operationAdapter.successful(state.loginOperation)
            };
        default:
            return state;
    }
}
