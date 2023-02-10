import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  const scroll$ = new Subject<number>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: ScrollService,
          useValue: { scroll$ },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    const instance = TestBed.createComponent(HeaderComponent);

    component = instance.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('.ngOnInit()', () => {
    ['sky', 'landscape', 'logo', 'gun'].forEach((key) =>
      it(`should set 'parallaxModifiers.${key}'`, fakeAsync(() => {
        component.ngOnInit();
        scroll$.next(100);

        tick();

        expect((component.parallaxModifiers as any)[key]).not.toBe('0px');
      }))
    );
  });
});
