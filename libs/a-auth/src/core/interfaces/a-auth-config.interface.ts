import { Mutation } from 'apollo-angular';
import { InjectionToken, Type } from '@angular/core';

export const LoginGQL = new InjectionToken('aauth.loginGql');
export const ResetPasswordGQL = new InjectionToken('aauth.resetPassword');
export const RegisterGQL = new InjectionToken('aauth.user-information');
export interface AAuthConfig<L, F, R> {
    rootUrl: string;
    mutation: {
        login: Type<Mutation<{}, L>>;
        resetPassword: Type<Mutation<{}, F>>;
        register: Type<Mutation<{}, R>>;
    };
}
