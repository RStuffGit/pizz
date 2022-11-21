import {Component, InjectionToken, Input, OnInit} from '@angular/core';


@Component({
  selector: 'custom-title',
  template: `
    <div class="product-title">{{title}}</div>
  `,
  styleUrls: [],
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  toUpper() {
    return this.title.toUpperCase();
  }

  toLower() {
    return this.title.toLowerCase();
  }
}
