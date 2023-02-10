import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BoxService } from 'src/app/graphql/services/box.service';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
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

    const instance = TestBed.createComponent(ItemComponent);

    component = instance.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
