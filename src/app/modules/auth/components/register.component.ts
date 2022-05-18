import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  singUpForm:FormGroup = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
    this.singUpForm = new FormGroup(
      {
        name:new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        validatePassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
        lastName:new FormControl('', [Validators.required, Validators.minLength(3)])
      },
      {
        validators: PasswordMatchValidator
      }
    )
  }

  SingUpValidation():void{

  }

  LoadFullData():void{
    const mockData = {
      name: 'Leonel',
      email: 'leo@angular.com',
      lastName: 'Rivas',
      password: '123456',
      validatePassword: '123456'
    }

    this.singUpForm.setValue(mockData);
  }

  LoadPartialData(){
    const mockData = {
      name: 'Leonel',
      email: 'leo@angular.com',
      lastName: 'Rivas'
    }

    this.singUpForm.patchValue(mockData);
  }
}

function PasswordMatchValidator(currentForm:AbstractControl | FormGroup):any{
  return currentForm.get('password')?.value === currentForm.get('validatePassword')?.value
    ? null : {'mismatch': true};
}