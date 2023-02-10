import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/graphql/services/user.service';
import { logout, restoreUser, setUser } from '../action/user.action';
import { initialState } from '../reducer/user.reducer';
import { UserState } from '../state/user-state.interface';
import { UserEffects } from './user.effects';

describe('UserEffects', () => {
  let effect: UserEffects;
  let userService: UserService;
  let actions$ = new Observable<any>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        provideMockStore<UserState>({ initialState: initialState }),
        {
          provide: UserService,
          useValue: {
            get: () => Promise.resolve({ father: 'Darth Vader', name: 'Luke' }),
            watchWallet: () => {},
            stopWatchWallet: () => {},
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    effect = TestBed.inject(UserEffects);
    userService = TestBed.inject(UserService);
  });

  it('should be defined', () => {
    expect(effect).toBeDefined();
  });

  describe('restore$', () => {
    it('should fetch the user and set', fakeAsync(() => {
      actions$ = of(restoreUser());

      let result = null;

      effect.restore$.subscribe((data) => (result = data));
      tick();

      expect(result).toEqual(
        setUser({ user: { father: 'Darth Vader', name: 'Luke' } as any })
      );
    }));
  });

  describe('watchWallet$', () => {
    it('should start to watch the user wallet', fakeAsync(() => {
      jest.spyOn(userService, 'watchWallet');

      actions$ = of(setUser({ user: null }));

      effect.watchWallet$.subscribe();
      tick();

      expect(userService.watchWallet).toHaveBeenCalled();
    }));
  });

  describe('stopWatchWallet$', () => {
    it('should start to watch the user wallet', fakeAsync(() => {
      jest.spyOn(userService, 'stopWatchWallet');

      actions$ = of(logout());

      effect.stopWatchWallet$.subscribe();
      tick();

      expect(userService.stopWatchWallet).toHaveBeenCalled();
    }));
  });
});
