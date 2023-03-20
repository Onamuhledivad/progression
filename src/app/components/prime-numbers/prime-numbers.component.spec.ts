import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumbersComponent } from './prime-numbers.component';

describe('PrimeNumbersComponent', () => {
  let component: PrimeNumbersComponent;
  let fixture: ComponentFixture<PrimeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNumbersComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNumbersComponent);
    component = fixture.componentInstance;

    component.numSeries = [12,17,22,27,32,37];
    component.primeNumbers = [12,17,22,27,32,37];
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

  it('getMultiples() Function para obtener los numeros multiplos', () => {
    component.getPrime();
    expect(component.primeNumbers).not.toBeNull();
  });


});
