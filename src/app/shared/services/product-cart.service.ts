import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";

@Injectable()
export class ProductCartService {
  constructor(private cartService: CartService) { }

  getCountCommon() {
  }
}
