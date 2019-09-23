import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type LoginResponse = {
    __typename?: 'LoginResponse';
    token: Token;
};

export type Message = {
    __typename?: 'Message';
    code: Scalars['String'];
    value?: Maybe<Scalars['String']>;
    developerValue?: Maybe<Scalars['String']>;
    error?: Maybe<Scalars['String']>;
    developerError?: Maybe<Scalars['String']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    login: LoginResponse;
    logout: OperationResponse;
    createUser: OperationResponse;
    resetPassword: OperationResponse;
};

export type MutationCreateUserArgs = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    dateOfBirth?: Maybe<Scalars['String']>;
};

export type MutationResetPasswordArgs = {
    username: Scalars['String'];
    email: Scalars['String'];
};

export type OperationResponse = {
    __typename?: 'OperationResponse';
    status: OperationStatus;
    message: Message;
};

export enum OperationStatus {
    Failed = 'FAILED',
    Successful = 'SUCCESSFUL',
    InProgress = 'IN_PROGRESS'
}

export type Query = {
    __typename?: 'Query';
    me: User;
};

export type Token = {
    __typename?: 'Token';
    type: TokenTypes;
    value: Scalars['String'];
};

export enum TokenTypes {
    Bearer = 'BEARER',
    Refresh = 'REFRESH'
}

export type User = {
    __typename?: 'User';
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    dateOfBirth?: Maybe<Scalars['String']>;
};
