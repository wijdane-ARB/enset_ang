import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { Product } from '../service/product';

@Component({
  selector: 'app-products',
  imports: [NgForOf, NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit {
  products : Array<any> = [];

  constructor(private product: Product){}
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.products = this.product.getAllProducts();
  }
handleDelete(product: any): void {
    let v = confirm("Are you sure you want to delete this product?");

    if (v==true) {
      this.product.deleteProduct(product);
      this.products = this.product.getAllProducts();

    }
}
}
