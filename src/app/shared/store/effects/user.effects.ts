import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../../graphql/services/user.service';
import { logout, restoreUser, setUser } from '../action/user.action';

@Injectable()
export class UserEffects {
  restore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(restoreUser),
      switchMap(() => from(this.userService.get())),
      map((payload) => setUser({ user: payload }))
    )
  );

  watchWallet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setUser),
        tap(() => this.userService.watchWallet())
      ),
    { dispatch: false }
  );

  stopWatchWallet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => this.userService.stopWatchWallet())
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
