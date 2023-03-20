import { Component, Input, SimpleChanges } from '@angular/core';
import { ProgressionService } from 'src/app/services/progression.service';

@Component({
  selector: 'app-prime-numbers',
  templateUrl: './prime-numbers.component.html',
  styleUrls: ['./prime-numbers.component.scss']
})
export class PrimeNumbersComponent {

  @Input()
  numSeries!: number[]; 

  primeNumbers: number[] = [];

  constructor(
    private readonly progServices: ProgressionService,
     ){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['numSeries'].currentValue) {
      this.getPrime();
    }
}



  getPrime(){
    this.primeNumbers = [];
    this.numSeries.map( num => {
      if(this.progServices.isPrime(num)){
        this.primeNumbers.push(num);
      }
    });
}

}
