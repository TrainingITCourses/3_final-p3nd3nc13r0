import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { BuscadorService } from '../buscador.service';
import { TipoActionTypes, TiposLoaded } from './tipo.actions';

@Injectable()
export class TipoEffects {
@Effect()
  public load$ = this.actions$.pipe(
    ofType(TipoActionTypes.LoadTipos),
    mergeMap(() =>
        this.buscadorService
          .getTipos$()
          .pipe(map(launches => new TiposLoaded(launches)))
      )
    );

  constructor(private actions$: Actions, private buscadorService: BuscadorService) {}
}
