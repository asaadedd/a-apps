import { OperationState, OperationStatusTypes } from './a-operation.interface';

export const selectStatus = (state: OperationState): OperationStatusTypes => state.status;
export const selectMessage = (state: OperationState): string => state.message;
