import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {ProductCartService} from "../../services/product-cart.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProductCartService]

})
export class ProductCardComponent {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  constructor() {
    // console.log('constructor');
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
    }
  }

  addProductToCart() {
    this.addToCartEvent.emit(this.titleComponent.title);
  }
}
