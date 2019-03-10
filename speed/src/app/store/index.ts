import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromAgencia from './agencia/agencia.reducer';
import * as fromTipo from './tipo/tipo.reducer';

export interface State {
  launch: fromLaunch.LaunchesState;
  status: fromStatus.StatusState;
  agencia: fromAgencia.AgenciasState;
  tipo: fromTipo.TiposState;
}

export const reducers: ActionReducerMap<State> = {
  launch: fromLaunch.reducer,
  status: fromStatus.reducer,
  agencia: fromAgencia.reducer,
  tipo: fromTipo.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
