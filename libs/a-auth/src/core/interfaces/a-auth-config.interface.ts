import { Mutation } from 'apollo-angular';
import { InjectionToken, Type } from '@angular/core';

export const LoginGQL = new InjectionToken('aauth.loginGql');
export const ForgotPasswordGQL = new InjectionToken('aauth.forgotPassword');
export const registerGQL = new InjectionToken('aauth.register');
export interface AAuthConfig<L, F, R> {
    rootUrl: string;
    mutation: {
        login: Type<Mutation<{}, L>>;
        forgotPassword: Type<Mutation<{}, F>>;
        register: Type<Mutation<{}, R>>;
    };
}
