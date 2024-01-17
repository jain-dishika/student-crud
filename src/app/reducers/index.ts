import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { userReducer } from '../redux/user.reducer';

export interface State {
}


export const reducers: ActionReducerMap<State> = {
  userList : userReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
