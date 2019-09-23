import { OperationAdapter } from '../../../../a-operation/src/a-operation.adapter';
import { RegisterState } from '@a-apps/a-auth/core/state/register.state';
import { RegisterActions, RegisterActionTypes } from '@a-apps/a-auth/core/actions/register.actions';

const createUserAdapter = new OperationAdapter();
const registerInitialState: RegisterState = {
    createUserOperation: createUserAdapter.getInitialState()
};

export function registerReducer(state: RegisterState = registerInitialState, action: RegisterActions): RegisterState {
    switch (action.type) {
        case RegisterActionTypes.CREATE_USER:
            return {
                ...state,
                createUserOperation: createUserAdapter.inProgress(state.createUserOperation)
            };
        case RegisterActionTypes.CREATE_USER_FAILED:
            return {
                ...state,
                createUserOperation: createUserAdapter.failed(state.createUserOperation, action.payload)
            };
        case RegisterActionTypes.CREATE_USER_SUCCESSFUL:
            return {
                ...state,
                createUserOperation: createUserAdapter.successful(state.createUserOperation)
            };
        default:
            return state;
    }
}
