import { fakeAsync, TestBed } from '@angular/core/testing';

import { ProgressionService } from './progression.service';

describe('ProgressionService', () => {
  let service: ProgressionService;
  const numInicial = 4;
  let arraySerie: number[] = [];
  const primeNum:number[] = [];
  const multipleNum:number[] = [];
 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('CreateSerie() Funcion para crear una secuencia lineal de numeros', fakeAsync(() => {
    service.createSerie(numInicial)
    .then(res => {
        arraySerie = [...res];
        expect(arraySerie[0]+numInicial).toBe(arraySerie[1]);
    })
  }));

  it('isPrimne() Funcion pasara saber si un numero es primo', () => {
      for(let i = 0; i<= 10; i ++){
        if(service.isPrime(i)){
          primeNum.push(i);
        }
      }
      expect(service.isPrime(primeNum[0])).toBeTruthy();
  });

  it('isMultiple() Funcion para saber si un numero es multiplo de 3', () => {
    for(let i = 0; i<= 10; i ++){
      if(service.isMultiple(i)){
        multipleNum.push(i);
      }
    }
    expect(service.isMultiple(multipleNum[0])).toBeTruthy();
});












});
