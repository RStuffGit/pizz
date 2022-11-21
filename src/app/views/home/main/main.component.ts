import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {from, map, Observable, Subject, Subscription} from "rxjs";
import {CartService} from "../../../shared/services/cart.service";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  // private observable: Observable<number>;

  private subject: Subject<number>;

  constructor(public cartService: CartService) {
    this.subject = new Subject<number>();

    let count = 0;
    let interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    let timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   let interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   let timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   let timeout2 = setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearInterval(timeout2);
    //     }
    //   };
    // });
  }

  value: any;
  products: ProductType[] = [];

  private subscription: Subscription | null = null;

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    // this.popupComponent.open();
  }

  ngOnInit() {
    this.subscription = this.subject
      .subscribe(
        {
          next(param: number) {
            console.log("subscriber 1: " + param);
          },
          error(e) {
            console.log('ERROR!!!! ' + e);
          },
          complete() {
            console.log('done');
          }
        });
  }

  test() {
    this.subscription?.unsubscribe();
    // this.subject
    //   .pipe(map((param) => ('Число: ' + param)))
    //   .subscribe((param: string) => {
    //     console.log("subscriber 2: " + param);
    //   });
  }

  scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"});
  }

}
