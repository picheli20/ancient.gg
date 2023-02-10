import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { setUser, restoreUser } from '../action/user.action';

@Injectable()
export class UserEffects {
  restore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(restoreUser),
      switchMap(() => from(this.userService.get())),
      map((payload) => setUser({ user: payload }))
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
