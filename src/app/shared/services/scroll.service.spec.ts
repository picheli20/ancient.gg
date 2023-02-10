import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ScrollService } from './scroll.service';
import { WINDOW } from './window.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ScrollService,
        {
          provide: WINDOW,
          useValue: {
            scrollY: 100,
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    service = TestBed.inject(ScrollService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('.compute()', () => {
    it(`should emit the new scroll value`, fakeAsync(() => {
      let position = 0;

      service.scroll$.subscribe((value) => (position = value));
      service.compute();

      tick();

      expect(position).toBe(100);
    }));
  });
});
