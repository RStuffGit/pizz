import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {
  public isLoggedSubject: Subject<boolean> = new Subject();
  private isLogged = false;

  constructor() { }

  getToken() {
    return 'text';
  }

  logIn() {
    this.isLogged = true;
    this.isLoggedSubject.next(this.isLogged);
  }

  logOut() {
    this.isLogged = false;
    this.isLoggedSubject.next(this.isLogged);
  }

  isLoggedIn():boolean {
    return this.isLogged;
  }
}
