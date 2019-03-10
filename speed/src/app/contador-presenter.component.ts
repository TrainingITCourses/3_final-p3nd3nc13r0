import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { LoadStatuses } from './store/status/status.actions';
import { Store } from '@ngrx/store';
import { State } from './store/index';
import { Status } from './store/models/status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contador-presenter',
  templateUrl: './contador-presenter.component.html'
})
export class ContadorPresenterComponent implements OnInit {

   @Input() public contador = { valor: 0 };

  constructor() {}

  ngOnInit() { }
}
