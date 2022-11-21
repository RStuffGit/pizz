import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from "./components/title/title.component";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {isChickenDirective} from "./directives/is-one.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {ChickenProductPipe} from "./pipes/chicken-product.pipe";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PopupComponent} from './components/popup/popup.component';

@NgModule({
  declarations: [
    TitleComponent,
    CoolInputDirective,
    isChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    ChickenProductPipe,
    ProductCardComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    TitleComponent,
    CoolInputDirective,
    isChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    ChickenProductPipe,
    ProductCardComponent,
    PopupComponent
  ]
})
export class SharedModule {
}
