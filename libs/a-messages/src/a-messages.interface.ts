export interface AMessagesState<C, M> {
    messages: (Message<C, M>)[];
}

export interface AMessageAdapter<C, M> {
    getInitialState: () => AMessagesState<C, M>;
    setOne: (state: AMessagesState<C, M>, message: Message<C, M>) => AMessagesState<C, M>;
    removeOne: (state: AMessagesState<C, M>, code: C, message: M) => AMessagesState<C, M>;
    removeMany: (state: AMessagesState<C, M>, code: C) => AMessagesState<C, M>;
    removeAll: (state: AMessagesState<C, M>) => AMessagesState<C, M>;
}

export interface Message<C, M> {
    code: C;
    message: M;
}

export interface AMessageConfig {
    removeDuplicates: boolean;
}
