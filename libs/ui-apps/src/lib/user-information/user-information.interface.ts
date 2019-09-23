export type RegisterParameter = {
    [key in ParametersKeys]: Parameter;
};

export interface User {
    username: string;
    password: string;
    [keys: string]: string;
}

interface Parameter {
    required: boolean;
}

export enum ParametersKeys {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    DATE_OF_BIRTH = 'dateOfBirth',
    PHONE_NUMBER = 'phoneNumber',
    EMAIL = 'email'
}

export enum RuleTypes {
    MIN_LENGTH = 'minLength',
    MAX_LENGTH = 'maxLength',
    UPPER_CASE = 'upperCase',
    SPECIAL_CHAR = 'specialChar'
}
