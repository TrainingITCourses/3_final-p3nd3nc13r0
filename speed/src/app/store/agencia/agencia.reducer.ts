import { AgenciaActions, AgenciaActionTypes } from './agencia.actions';

export interface AgenciasState {
  agencias: any[];
  loading: boolean;
}

export const initialState: AgenciasState = {
  agencias: [],
  loading: false
};

export function reducer(
  state = initialState,
  action: AgenciaActions
): AgenciasState {
  switch (action.type) {
    case AgenciaActionTypes.LoadAgencias:
      return { ...state, loading: true };
    case AgenciaActionTypes.AgenciasLoaded:
      return { loading: false, agencias: action.payload };
    default:
      return state;
  }
}
