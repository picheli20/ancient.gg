import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ScrollService } from './shared/services/scroll.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let service: ScrollService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: ScrollService,
          useValue: {
            compute: () => null,
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    const instance = TestBed.createComponent(AppComponent);

    component = instance.componentInstance;
    service = TestBed.inject(ScrollService);
  });

  describe('.onScroll', () => {
    it('should compute the scroll event', () => {
      jest.spyOn(service, 'compute');
      component.onScroll();

      expect(service.compute).toHaveBeenCalledTimes(1);
    });
  });
});
