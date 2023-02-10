import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { WINDOW } from 'src/app/shared/services/window.service';
import { HeaderBarComponent } from './header-bar.component';

describe('HeaderBarComponent', () => {
  let component: HeaderBarComponent;
  let windowProvider: Window;
  const scroll$ = new Subject<number>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBarComponent],
      providers: [
        {
          provide: ScrollService,
          useValue: { scroll$ },
        },
        {
          provide: Store,
          useValue: {
            select: () => of(null),
          },
        },
        {
          provide: WINDOW,
          useValue: {
            location: {
              href: 'http://defaut/',
            },
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    const instance = TestBed.createComponent(HeaderBarComponent);

    component = instance.componentInstance;
    windowProvider = TestBed.inject(WINDOW);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('.ngOnInit()', () => {
    it('should set `isSolid` if the scroll is more than the offset', fakeAsync(() => {
      component.ngOnInit();

      expect(component.isSolid).toBe(false);

      scroll$.next(component.SOLID_OFFSET + 1);

      tick();

      expect(component.isSolid).toBe(true);
    }));
  });

  describe('.login()', () => {
    it('should redirect to the login page', () => {
      expect(windowProvider.location.href).toBe('http://defaut/');
      component.login();

      expect(windowProvider.location.href).toBe(
        'https://api-staging.csgoroll.com/auth/steam?redirectUri=http://defaut/'
      );
    });
  });
});
