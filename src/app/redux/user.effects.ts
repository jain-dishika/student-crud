import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../services/api.service';
import { getUsers, loadUser } from './user.action';
import { EMPTY, catchError, map, exhaustMap } from 'rxjs';
import { Injectable } from '@angular/core';

Injectable();
export class userEffects {
  UserList = createEffect(() =>
    this.action$.pipe(
      ofType(loadUser),
      exhaustMap(() =>{
        return this.service.getAllUsers().pipe(
          map((data) => {
            return getUsers({userList : data});
          }),
          catchError(()=> EMPTY)
        )
      }
        // this.service.getAllUsers().pipe(
        //   map((user) => ({ type: 'GET_USER', payload: user })),
        //   catchError(() => EMPTY)
        // )
      )
    )
  );
  constructor(private action$: Actions, private service: ApiService) {}
}
