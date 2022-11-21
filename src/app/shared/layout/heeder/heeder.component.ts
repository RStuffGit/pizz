import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './heeder.component.html',
  styleUrls: ['./heeder.component.scss']
})
export class HeederComponent implements OnInit, OnDestroy {

  loggedState: boolean = false;
  constructor(public cartService: CartService, public authService: AuthService) {
    this.loggedState = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.authService.isLoggedSubject.subscribe((isLoggedIn: boolean) => {
      this.loggedState = isLoggedIn;
      // other logic
      console.log('State has been changed: ' + isLoggedIn);
    });
  }

  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.authService.isLoggedSubject.unsubscribe();
  }

}
