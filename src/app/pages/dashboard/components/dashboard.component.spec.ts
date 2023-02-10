import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BoxService } from 'src/app/graphql/services/box.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
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

    const instance = TestBed.createComponent(DashboardComponent);

    component = instance.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
