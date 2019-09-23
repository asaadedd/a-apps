import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegisterParameter, User } from '../user-information.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mapValues } from 'lodash';

@Component({
  selector: 'ui-apps-user-information-create',
  templateUrl: './user-information-create.component.html',
  styleUrls: ['./user-information-create.component.scss']
})

export class UserInformationCreateComponent implements OnInit {
    @Input() parameters: RegisterParameter;
    @Output() readTerms: EventEmitter<never> = new EventEmitter<never>();
    @Output() register: EventEmitter<User> = new EventEmitter<User>();
    registerForm: FormGroup;

    ngOnInit() {
        this.registerForm = new FormGroup({
            ...mapValues(this.parameters, () => new FormControl('', [])),
            username: new FormControl('', [Validators.minLength(5)]),
            password: new FormControl('', [Validators.minLength(8)])
        });
    }
}
