import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  public products: ProductType[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://test.com/products')
      .subscribe(   (data) => {
        console.log(data);
      })
  }


  getProducts(): Observable<ProductType[]> {
    const params = new HttpParams();
    params.set('name', 1);
    params.set('extra', 'test');
    return this.http.get<ProductType[]>(environment.apiUrl + 'pizzas', { params: params });
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`);
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{success: boolean, message?: string}>(`https://testologia.site/order-pizza`, data);
  }


}
