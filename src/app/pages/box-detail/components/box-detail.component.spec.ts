import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { BoxService } from 'src/app/graphql/services/box.service';
import { BoxDetailComponent } from './box-detail.component';

describe('BoxDetailComponent', () => {
  let component: BoxDetailComponent;
  let boxService: BoxService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BoxDetailComponent],
      providers: [
        {
          provide: BoxService,
          useValue: {
            load: () => Promise.resolve({ foo: 'bar' }),
            open: () =>
              of([
                {
                  id: '123-abc',
                  itemVariant: {
                    id: 'abc-123',
                    name: 'Item',
                    value: 1,
                    currency: 'EUR',
                    iconUrl: 'https://via.placeholder.com/300.png/09f/fff',
                  },
                },
              ]),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (data: string) => data,
            }),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: (data: any) => data,
          },
        },
        {
          provide: Store,
          useValue: {
            select: () => of(true),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    const instance = TestBed.createComponent(BoxDetailComponent);

    component = instance.componentInstance;
    boxService = TestBed.inject(BoxService);
    router = TestBed.inject(Router);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('box$', () => {
    it('should call `boxService.load` with the correct value', () => {
      jest.spyOn(boxService, 'load');

      component.box$.subscribe();

      expect(boxService.load).toHaveBeenCalledWith('slug');
    });

    it('should set `box`', fakeAsync(() => {
      component.ngOnInit();

      tick();

      expect(component.box).toEqual({ foo: 'bar' });
    }));

    it('should set `isAuthenticated`', fakeAsync(() => {
      expect(component.isAuthenticated).toEqual(false);
      component.ngOnInit();

      tick();

      expect(component.isAuthenticated).toEqual(true);
    }));

    describe('no slug', () => {
      it('should redirect to 404 page', fakeAsync(() => {
        jest.spyOn(router, 'navigate');
        jest.spyOn(boxService, 'load').mockReturnValue(Promise.resolve(null));

        component.ngOnInit();

        tick();

        expect(router.navigate).toHaveBeenCalledWith(['/404']);
      }));
    });
  });

  describe('.cleanBox()', () => {
    it('should clean `boxOpening` array', fakeAsync(() => {
      component.boxOpening = [1, 2, 3] as any;

      component.cleanBox();

      expect(component.boxOpening.length).toBe(0);
    }));
  });

  describe('.open()', () => {
    beforeEach(() => {
      jest.spyOn(boxService, 'open');
      component.box = {
        cost: 1,
        currency: 'EUR',
        description: 'abc',
        iconUrl: 'https://via.placeholder.com/300.png/09f/fff',
        id: '123abc',
        name: 'Test',
        slots: [],
        slug: '123-abc',
      };
    });

    it('should set `boxOpening`', fakeAsync(() => {
      expect(component.boxOpening.length).toEqual(0);

      component.open();

      tick();

      expect(boxService.open).toHaveBeenCalled();
      expect(component.boxOpening.length).toEqual(1);
    }));
  });
});
