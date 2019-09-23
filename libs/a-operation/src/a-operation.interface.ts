export interface OperationState {
    status: OperationStatusTypes;
    message: string;
}

export interface AOperationAdapter {
    getInitialState: () => OperationState,
    inProgress: (state: OperationState) => OperationState,
    failed: (state: OperationState, message?: string) => OperationState,
    successful: (state: OperationState, message?: string) => OperationState
}

export enum OperationStatusTypes {
    IN_PROGRESS = 'IN_PROGRESS',
    FAILED = 'FAILED',
    SUCCESSFUL = 'SUCCESSFUL',
    NONE = 'NONE'
}
