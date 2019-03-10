import { Action } from '@ngrx/store';

export enum TipoActionTypes {
  LoadTipos = '[Tipo] Load Tipos',
  TiposLoaded = '[Tipo] Tipos Loaded'
}

export class LoadTipos implements Action {
  readonly type = TipoActionTypes.LoadTipos;
}
export class TiposLoaded implements Action {
  readonly type = TipoActionTypes.TiposLoaded;
  constructor(readonly payload: any[]) {}
}

export type TipoActions = LoadTipos | TiposLoaded;
