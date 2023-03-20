
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProgressionService } from './services/progression.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('Start() function para crear el array inicial', fakeAsync(() => {
    component.nForm.controls['nValue'].setValue('5');
    component.start();
    fixture.detectChanges();
    expect(component.serieArray.length).not.toBeNull();
    expect(component.submitted).toBeFalsy();
  }));

  it('Invalid Form', () => {
    component.nForm.controls['nValue'].setValue('0');
    component.start();
    fixture.detectChanges();
    expect(component.submitted).toBeFalsy();
  });

  it('Start() catch error', () => {
    component.nForm.controls['nValue'].setValue('hola');
    component.start();
    fixture.detectChanges();
    expect(component.submitted).toBeFalsy();
  });




});
