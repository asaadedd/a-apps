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

export type Query = {
    __typename?: 'Query';
    me: User;
};

export type User = {
    __typename?: 'User';
    firstName: Scalars['String'];
    lastName?: Maybe<Scalars['String']>;
    dateOfBirth?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};
