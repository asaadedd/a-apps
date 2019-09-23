import { OperationAdapter } from '../../../../a-operation/src/a-operation.adapter';
import { ForgotPasswordState } from '@a-apps/a-auth/core/state/forgot-password.state';
import { ForgotPasswordActions, ForgotPasswordActionTypes } from '@a-apps/a-auth/core/actions/forgot-password.actions';

const operationAdapter = new OperationAdapter();
const forgotPasswordState: ForgotPasswordState = {
    resetPasswordOperation: operationAdapter.getInitialState(),
};

export function forgotPasswordReducer(state: ForgotPasswordState = forgotPasswordState, action: ForgotPasswordActions): ForgotPasswordState {
    switch(action.type) {
        case ForgotPasswordActionTypes.RESET_PASSWORD:
            return {
                ...state,
                resetPasswordOperation: operationAdapter.inProgress(state.resetPasswordOperation)
            };
        case ForgotPasswordActionTypes.RESET_PASSWORD_FAILED:
            return {
                ...state,
                resetPasswordOperation: operationAdapter.failed(state.resetPasswordOperation)
            };
        case ForgotPasswordActionTypes.RESET_PASSWORD_SUCCESSFUL:
            return {
                ...state,
                resetPasswordOperation: operationAdapter.successful(state.resetPasswordOperation)
            };
        default:
            return state;
    }
}
