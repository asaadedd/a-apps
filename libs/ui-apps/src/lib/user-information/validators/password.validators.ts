import { AbstractControl, ValidatorFn } from '@angular/forms';
import { RuleTypes } from '../user-information.interface';

export class PasswordValidators {
    static upperCase(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const containsUpperCase = (control.value as string).toLowerCase() !== control.value;

            return !containsUpperCase ? {
                [RuleTypes.UPPER_CASE]: {value: control.value}
            } : null;
        };
    }

    static specialChar(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const specialCharExp = new RegExp(/(?=.*?[#?!@$%^&*-.,])/, 'gm');
            const containsSpecialChar = specialCharExp.test(control.value);

            return !containsSpecialChar ? {
                [RuleTypes.SPECIAL_CHAR]: {value: control.value}
            } : null;
        };
    }
}
