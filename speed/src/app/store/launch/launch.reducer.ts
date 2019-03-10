import { LaunchActions, LaunchActionTypes } from './launch.actions';

export interface LaunchesState {
  launches: any[];
  loading: boolean;
}

export const initialState: LaunchesState = {
  launches: [],
  loading: false
};

export function reducer(
  state = initialState,
  action: LaunchActions
): LaunchesState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case LaunchActionTypes.LaunchesLoaded:
      return { loading: false, launches: action.payload };
    default:
      return state;
  }
}
