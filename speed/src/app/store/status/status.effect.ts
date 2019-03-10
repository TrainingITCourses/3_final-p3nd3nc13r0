import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { BuscadorService } from '../buscador.service';
import { StatusActionTypes, StatusesLoaded, LoadStatuses } from './status.actions';

@Injectable()
export class StatusEffects {
  @Effect()
  public load$ = this.actions$.pipe(
    ofType(StatusActionTypes.LoadStatuses),
    mergeMap(() =>
        this.buscadorService
          .getStatus$()
          .pipe(map(statuses => new StatusesLoaded(statuses)))
      )
    );
  constructor(private actions$: Actions, private buscadorService: BuscadorService) {}
}
