import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Progresion';

  // constructor (
  //   private fb: FormBuilder,
  //   public form: FormGroup
  //   ) { }

  //   ngOnInit (): void {
  //   this.form = this.fb.group ({
  //   limite: [null, [Validators.required, Validators.pattern ("^[0-9")]],
  //   });
  //   }

  
}
