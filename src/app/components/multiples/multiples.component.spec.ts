import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressionService } from '../../services/progression.service';

import { MultiplesComponent } from './multiples.component';

describe('MultiplesComponent', () => {
  let component: MultiplesComponent;
  let fixture: ComponentFixture<MultiplesComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplesComponent ],
      providers: [
        ProgressionService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplesComponent);
    component = fixture.componentInstance;

    component.numSeries = [12,17,22,27,32,37];
    component.multiplesNum = component.numSeries;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges', () => {
    component.ngOnChanges({
      numSeries: new SimpleChange(null, component.numSeries, true)
    });
    fixture.detectChanges();
    expect(component.numSeries[0]).toBe(12);
  });

  it('getNumbers() Function para obtener los numeros multiplos', () => {
    component.getNumbers();
    expect(component.multiplesNum).not.toBeNull();
  });





});
