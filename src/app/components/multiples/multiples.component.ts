import { Component, Input, IterableDiffer, IterableDiffers, OnInit, SimpleChanges } from '@angular/core';
import { ProgressionService } from '../../services/progression.service';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss']
})
export class MultiplesComponent  {

  @Input()
  numSeries!: number[]; 

  multiplesNum: number[] = [];

  constructor(
    private readonly progServices: ProgressionService,
     ){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['numSeries'].currentValue) {
      this.getNumbers();
    }
  }

  getNumbers(){
    this.multiplesNum = [];
    this.numSeries.map( num => {
      if(this.progServices.isMultiple(num)){
        this.multiplesNum.push(num);
      }
    });
  }

  

}
