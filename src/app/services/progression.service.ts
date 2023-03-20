import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressionService {
  //Arreglo para almacenar la serie lineal
  serie:number[] = [];
  
  /*
  Se crear el numero inicial aleatoriamente, se incrementa dependiendo el valor < n > para crear la secuencia 
  y retorna el arrreglo completo con los serie a utilizar
  */

  createSerie = (n:number):Promise<Array<number>> => {
    this.serie = [];
    return new Promise((resolve, reject) => {
      let numInicial = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      this.serie.push(numInicial);
      for( let i = 1; i <= 5; i ++ ){
        this.serie.push( numInicial = numInicial+n );
      }
      (this.serie.length > 0)
      ? resolve(this.serie)
      : reject(`Error al generar sucesion`);
    });
  }
  


  //function para numero primos
  /*
    Se utiliza la funcion Math.sqrt para obtener la raiz cuadrada del numero a verificar 
    y poder iniciar la interacion desde el numero 2
  */ 
  isPrime = (n:number) => {
    if (n<=1) return false;
     for (var i = 2; i <= Math.sqrt(n); i++){
         if (n % i == 0) return false;
     }
     return true;
  }


  //function para saber si un numero es multiplos de 3 o no 

  isMultiple = (n:number) => {
    return n%3 == 0 ? true : false;
  }

}
