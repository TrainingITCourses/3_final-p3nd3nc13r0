import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { BuscadorService } from '../buscador.service';
import { LaunchActionTypes, LaunchesLoaded } from './launch.actions';

@Injectable()
export class LaunchEffects {

 @Effect()
  public load$ = this.actions$.pipe(
    ofType(LaunchActionTypes.LoadLaunches),
    mergeMap(() =>
        this.buscadorService
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  constructor(private actions$: Actions, private buscadorService: BuscadorService) {}
}
