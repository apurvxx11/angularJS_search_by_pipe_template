import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  query:string;
  products: Product[];

  constructor(private produc:ProductServiceService) { }

  ngOnInit(): void {
    this.produc.getProducts().subscribe((data)=>
    {
      this.products=data;
      this.produc.setProducts(this.products)
    });
  }
}
