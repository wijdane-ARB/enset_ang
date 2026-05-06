import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [NgForOf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products {
  products = [
    {id : 1 ,name : "Computer" , price : 6500 , selected : true},
    {id : 2 ,name : "Smartphone" , price : 3500, selected : false},
    {id : 3 ,name : "Tablet" , price : 2500 , selected : true},

  ]
}
