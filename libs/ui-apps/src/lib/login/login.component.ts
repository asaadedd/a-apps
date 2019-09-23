import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginData } from './login.interfaces';

@Component({
    selector: 'ui-apps-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
    @Output() login: EventEmitter<LoginData> = new EventEmitter<LoginData>();
    @Output() register: EventEmitter<never> = new EventEmitter<never>();
    @Output() forgotPassword: EventEmitter<never> = new EventEmitter<never>();
}
