import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Output() clicked = new EventEmitter<any>()

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  itemClicked() {
    this.clicked.emit(this.product)
  }

}
