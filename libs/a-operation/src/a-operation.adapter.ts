import { AOperationAdapter, OperationState, OperationStatusTypes } from './a-operation.interface';

export class OperationAdapter implements AOperationAdapter {
    constructor() {}

    getInitialState(): OperationState {
        return {
            status: OperationStatusTypes.NONE,
            message: ''
        };
    }

    inProgress(state: OperationState): OperationState {
        return {
            ...state,
            status: OperationStatusTypes.IN_PROGRESS
        };
    }

    failed(state: OperationState, message?: string): OperationState {
        return {
            ...state,
            status: OperationStatusTypes.FAILED,
            message: message || state.message
        };
    }

    successful(state: OperationState, message?: string): OperationState {
        return {
            ...state,
            status: OperationStatusTypes.SUCCESSFUL,
            message: message || state.message
        };
    }
}
