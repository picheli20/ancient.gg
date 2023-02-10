import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BoxOpennedComponent } from './box-openned.component';
import party from 'party-js';

describe('BoxOpennedComponent', () => {
  let component: BoxOpennedComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BoxOpennedComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    const instance = TestBed.createComponent(BoxOpennedComponent);

    component = instance.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('.ngOnInit()', () => {
    it('should play confetti animation', () => {
      jest.spyOn(party, 'confetti');

      component.ngOnInit();

      expect(party.confetti).toHaveBeenCalled();
    });
  });

  describe('.close()', () => {
    it('should emit the close event', () => {
      jest.spyOn(component.closed, 'emit');

      component.close();

      expect(component.closed.emit).toHaveBeenCalled();
    });
  });
});
