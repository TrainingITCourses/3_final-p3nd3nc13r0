import { Action } from '@ngrx/store';

export enum AgenciaActionTypes {
  LoadAgencias = '[Agencia] Load Agencias',
  AgenciasLoaded = '[Agencia] Agencias Loaded'
}

export class LoadAgencias implements Action {
  readonly type = AgenciaActionTypes.LoadAgencias;
}

export class AgenciasLoaded implements Action {
  readonly type = AgenciaActionTypes.AgenciasLoaded;
  constructor(readonly payload: any[]) {}
}

export type AgenciaActions = LoadAgencias | AgenciasLoaded;
