import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, of, retry, tap} from 'rxjs';
import {Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  loading = false;
  constructor(private productService: ProductService,
              private http: HttpClient,
              private router: Router) {
  }

  products: ProductType[] = [];

  ngOnInit() {
    this.loading = true;
    return this.productService.getProducts()
      .pipe(
        tap((data: any) => {
          console.log(data)
        }),
        catchError((err) => {
          return of([]);
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            this.loading = false
          },
          error: (error) => {
            console.log(error);
            // this.router.navigate(['/']);
          }
        }
      );
  }

  addToCart(title: string) {
    // this.router.navigate(['order'], {queryParams: {title: title}});
  }

}
