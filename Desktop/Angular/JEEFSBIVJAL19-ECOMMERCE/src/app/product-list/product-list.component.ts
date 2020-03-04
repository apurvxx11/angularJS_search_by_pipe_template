import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  //
  constructor(private prod:ProductServiceService) { }

  ngOnInit(): void {
    this.prod.getProducts().subscribe((data)=>
    {
      this.products=data;
      this.prod.setProducts(this.products)
    });
  }

  removeProduct(product:Product){
    console.log();
    this.prod.removeProduct(product);
    console.log(product.id  + "is deleted");
    this.products = this.prod.getCurrProducts();
  }

}
