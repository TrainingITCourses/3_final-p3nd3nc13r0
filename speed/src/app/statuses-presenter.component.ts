import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { LoadStatuses } from './store/status/status.actions';
import { Store } from '@ngrx/store';
import { State } from './store/index';
import { Status } from './store/models/status';
import { Agency } from './store/models/agency';
import { LoadLaunches } from './store/launch/launch.actions';
import { LoadAgencias } from './store/agencia/agencia.actions';
import { LoadTipos } from './store/tipo/tipo.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-statuses-presenter',
  templateUrl: './statuses-presenter.component.html',
  styleUrls: ['./statuses-presenter.component.css']
})
export class StatusesPresenterComponent implements OnInit {

  //@Input() public statuses: Status [];
  public statuses: any[];
  public launches: any[];
  public agencias: Agency[] = [];

  @Output() public buscarLanzamientos = new EventEmitter();

  constructor(private store: Store<State>) { }

  ngOnInit() {

    
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadAgencias());
    this.store.dispatch(new LoadTipos());
    
    this.store
    .select('launch')
    .subscribe(launchesState => (this.launches = launchesState.launches));

    //this.store.dispatch(new LoadStatuses());

    this.store
      .select('status')
      .subscribe(statusesState => (this.statuses = statusesState.statuses));

    this.store
   .select('agencia')
   .subscribe(agenciasState => (this.agencias = agenciasState.agencias));
    console.log('onInit');
   console.log(this.agencias.length);
    console.log(this.statuses.length);
    console.log(this.launches.length);
  }

  public onClick = (idStatus: number) => {
    console.log(idStatus);
    this.buscarLanzamientos.emit(idStatus);
  }
}
