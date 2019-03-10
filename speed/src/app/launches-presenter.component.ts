import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Launch } from './store/models/launch';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from './store/index';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-presenter',
  templateUrl: './launches-presenter.component.html',
  styleUrls: ['./launches-presenter.component.css']
})
export class LaunchesPresenterComponent implements OnInit {

  public launches: Launch[];

  public filteredLaunches: Launch[] = [];

  //@Input() public contador: number;

  @Output() public reordenarLanzamientos = new EventEmitter();

  @Output() public detalleLanzamiento = new EventEmitter();

  public contador = { valor: 0 };


  constructor(private activatedRoute: ActivatedRoute, 
              private store: Store<State> ,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.store
    .select('launch')
    .subscribe(launchesState => (this.launches = launchesState.launches));
    const id = this.activatedRoute.snapshot.params['id'];


    this.buscarLanzamientos(id);

    console.log('this.launches.length ' + this.launches.length);
    console.log(this.filteredLaunches.length);


  }

  buscarLanzamientos(idStatus: number) {
    this.filteredLaunches = this.launches.filter(
      (launch: Launch) =>
      launch.status == idStatus
    );
    this.contador.valor = this.filteredLaunches.length;
  }

  reordenar(termino: string) {
    if (termino === 'asc') {
      this.sortLaunchesAscByDate();
  } else {
    this.sortLaunchesDscByDate();
  }
  }

  public onClick = (idLanzamiento: number) => {
    //this.detalleLanzamiento.emit(idLanzamiento);
    this.router.navigate(['launchdetail', idLanzamiento], { relativeTo: this.route });
  }



  public sortLaunchesAscByDate(): void {
    this.filteredLaunches.sort((a: Launch, b: Launch) => {
        return this.getTime(new Date(a.net)) - this.getTime(new Date(b.net));
    });
}

public sortLaunchesDscByDate(): void {
  this.filteredLaunches.sort((a: Launch, b: Launch) => {
      return this.getTime(new Date(b.net)) - this.getTime(new Date(a.net));
  });
}

private getTime(date?: Date) {
  return date != null ? date.getTime() : 0;
}


}
