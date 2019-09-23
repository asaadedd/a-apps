import { AMessageConfig, AMessageAdapter, AMessagesState, Message } from './a-messages.interface';
import { remove } from 'lodash';

export class MessageAdapter<C, M> implements AMessageAdapter<C, M> {
    private static readonly DEFAULT_CONFIG = {
        removeDuplicates: true
    };
    constructor(private readonly config: AMessageConfig = MessageAdapter.DEFAULT_CONFIG) {}

    getInitialState(): AMessagesState<C, M> {
        return {
            messages: []
        };
    }

    setOne(state: AMessagesState<C, M>, message: Message<C, M>): AMessagesState<C, M> {
        const isMessageAlreadyPresent = !!state.messages
            .find((msg) => msg.message === message.message && msg.code === message.code);
        if (!isMessageAlreadyPresent || !this.config.removeDuplicates) {
            state.messages.push(message);
        }

        return {
            ...state,
            messages: state.messages.slice(0)
        };
    }

    removeOne(state: AMessagesState<C, M>, code: C, message: M): AMessagesState<C, M> {
        remove(state.messages, (msg: Message<C, M>) => msg.code === code && msg.message === message);

        return {
            ...state,
            messages: state.messages.slice(0)
        };
    }

    removeMany(state: AMessagesState<C, M>, code: C): AMessagesState<C, M> {
        remove(state.messages, (msg: Message<C, M>) => msg.code === code);

        return {
            ...state,
            messages: state.messages.slice(0)
        };
    }

    removeAll(state: AMessagesState<C, M>): AMessagesState<C, M> {
        return {
            ...state,
            messages: []
        };
    }
}
