import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-apps-application-login-information',
    templateUrl: './application-login-information.component.html',
    styleUrls: ['./application-login-information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationLoginInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
