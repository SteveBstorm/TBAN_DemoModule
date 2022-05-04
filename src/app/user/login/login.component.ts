import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email! : string
  password! : string

  maListe : string[] = [
    "tomate", "carotte", "salsifi"
  ]

  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this._auth.login(this.email, this.password)
  }
}
