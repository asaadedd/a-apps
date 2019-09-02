import { Component } from '@angular/core';

@Component({
  selector: 'e-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-appointment';
  a = {
    ICE: '#99D3DF',
    FRESH_WATER: '#88BBD6',
    PLASTER: '#CDCDCD',
    LINEN: '#E9E9E9'
  };
}
