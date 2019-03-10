import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { BuscadorService } from '../buscador.service';
import { AgenciaActionTypes, AgenciasLoaded } from './agencia.actions';

@Injectable()
export class AgenciaEffects {
  @Effect()
  public load$ = this.actions$.pipe(
    ofType(AgenciaActionTypes.LoadAgencias),
    mergeMap(() =>
        this.buscadorService
          .getAgencias$()
          .pipe(map(agencias => new AgenciasLoaded(agencias)))
      )
    );

  constructor(private actions$: Actions, private buscadorService: BuscadorService) {}
}
