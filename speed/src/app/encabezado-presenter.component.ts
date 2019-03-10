import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
  } from '@angular/core';
import { Launch } from './store/models/launch';

  @Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-encabezado-presenter',
    templateUrl: './encabezado-presenter.component.html'
  })
  export class EncabezadoPresenterComponent implements OnInit {

    @Input() public launches: Launch[];

    @Input() public filteredLaunches: Launch[] = [];

    constructor() {}

    ngOnInit() {}
  }
