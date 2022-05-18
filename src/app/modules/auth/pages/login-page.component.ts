import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  value:string = 'Hola soy leo';
  loginForm:FormGroup = new FormGroup({});

  constructor(private replaceSpace:ReplaceSpacePipe) { }

  ngOnInit(): void {
    this.value = this.replaceSpace.transform(this.value, '🦁');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  SendCredentials():void{
    const body = this.loginForm.value;
    console.log(body);
  }

}
