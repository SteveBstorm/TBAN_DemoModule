import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _client : HttpClient
  ) { }

  login(email :string, password : string) {
    this._client.post<AppUser>(environment.baseadress+'user/login', {email : email, password : password}).subscribe({
      next : (data : AppUser) => {
        localStorage.setItem('currentUser', JSON.stringify(data))
      },
      error : (error) => console.log(error)
    })
  }
}
export interface AppUser {
  id : number
  email : string
  role : string
  nickname : string
  token : string
}
