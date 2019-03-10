import { TipoActionTypes, TipoActions } from './tipo.actions';


export interface TiposState {
  tipos: any[];
  loading: boolean;
}

export const initialState: TiposState = {
  tipos: [],
  loading: false
};

export function reducer(
  state = initialState,
  action: TipoActions
): TiposState {
  switch (action.type) {
    case TipoActionTypes.LoadTipos:
      return { ...state, loading: true };
    case TipoActionTypes.TiposLoaded:
      return { loading: false, tipos: action.payload };
    default:
      return state;
  }
}
