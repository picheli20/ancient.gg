import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BoxService } from 'src/app/graphql/services/box.service';
import { BoxComponent } from './box.component';

describe('BoxComponent', () => {
  let component: BoxComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxComponent],
      providers: [
        {
          provide: BoxService,
          useValue: {
            get: () => Promise.resolve(1),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    const instance = TestBed.createComponent(BoxComponent);

    component = instance.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
