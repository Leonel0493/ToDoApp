import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';
import { Observable, Subscription } from 'rxjs';
import { AuthTestService } from '../services/auth-test.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  value:string = 'Hola soy leo';
  loginForm:FormGroup = new FormGroup({});
  lstObservables$:Array<Subscription> = []

  constructor(private replaceSpace:ReplaceSpacePipe, private authService:AuthTestService) { }

  ngOnInit(): void {
    this.value = this.replaceSpace.transform(this.value, '🦁');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnDestroy(): void {
    this.lstObservables$.forEach((obs) => obs.unsubscribe());
  }

  SendCredentials():void{
    const credentials = this.loginForm.value;
    const obsLoginSubmit$ = this.authService.SubmitLogin(credentials).subscribe((resp) => {
      console.log(resp);
    });

    this.lstObservables$.push(obsLoginSubmit$);
  }

}
