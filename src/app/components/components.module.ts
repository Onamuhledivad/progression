import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplesComponent } from './multiples/multiples.component';
import { PrimeNumbersComponent } from './prime-numbers/prime-numbers.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MultiplesComponent,
    PrimeNumbersComponent
  ],
  exports:[
    MultiplesComponent,
    PrimeNumbersComponent
  ]
})
export class ComponentsModule { }
