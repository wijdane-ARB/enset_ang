import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    {id : 1 ,name : "Computer" , price : 6500 , selected : true},
    {id : 2 ,name : "Smartphone" , price : 3500, selected : false},
    {id : 3 ,name : "Tablet" , price : 2500 , selected : true},

  ];

  constructor() {}
  getAllProducts(){
    return this.products;
  }
  deleteProduct(product : any){
    this. products = this.products.filter(p=>p.id!=product.id)

  }


}
