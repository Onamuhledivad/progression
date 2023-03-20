import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NumberValueAccessor, FormBuilder } from '@angular/forms';
import { ProgressionService } from './services/progression.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  submitted = false;

  serieArray: number[] = [];

  nForm:FormGroup;
  

  constructor(
    private readonly progServices: ProgressionService,
    private readonly fb: FormBuilder
    ){
    
      this.nForm = this.fb.group({
        nValue: new FormControl('',
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(3),
              Validators.pattern(/^-?(0|[1-9]\d*)?$/), 
              Validators.max(999)
            ]
        )
      });
  }


  start(){
    
    if (this.nForm.invalid || this.nForm.controls['nValue'].value == 0 || this.nForm.controls['nValue'].value == 1) {
      return;
    }
    
    this.serieArray = [];
    const num = this.nForm.controls['nValue'].value;
    this.progServices.createSerie(Number(num))
    .then( result  => {
      this.submitted = true;
      this.serieArray = [...result];
    })
    .catch( err => console.log(err))
    
  }

}
