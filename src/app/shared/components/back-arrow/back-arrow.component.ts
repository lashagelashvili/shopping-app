import { Component, OnInit, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss'],
})
export class BackArrowComponent {
  private _location = inject(Location);

  goBack() {
    this._location.back();
  }
}
