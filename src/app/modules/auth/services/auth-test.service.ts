import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  private URL:string = environment.api;

  constructor(private httpClient:HttpClient) { }

  UniqueEmailValidator(): AsyncValidatorFn{
    return (control: AbstractControl) : Observable<ValidationErrors | null> => {
      return of(control.value)
      .pipe(
        delay(1500),
        map((email) => {
          const emails = ['test@test.com', 'hola@gmail.com'];
          return emails.includes(email);
        })
      ).pipe(
        map((exists) => (exists ? {emailExists: true} : null)),
        catchError(async() => null)
      )
    }
  }

  SubmitLogin(credentials:{email:string, password:string}):Observable<any>{
    return this.httpClient.post(
      `${this.URL}/auth/login`,
      credentials
    )
  }
}
