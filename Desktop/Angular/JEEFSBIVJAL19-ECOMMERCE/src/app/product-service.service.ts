import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products:Product[];
  temp:Product[];

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
      let url = '../assets/db.json';
      return this.http.get(url);
  }
  setProducts(product:Product[]){
    this.products = product;
  }
  getCurrProducts():Product[]{
    return this.products;
  }

  searchProducts(query:string){
    this.getProducts().subscribe((data)=>
    {
      this.products=data.products;
      this.setProducts(this.products)
    });
    console.log(this.products[0].id);

    this.products.forEach((element,index)=>{
      if(element.id==query || element.name==query || element.category==query){
        this.temp.push(element);
        console.log(element.id);
      }
    });
    
    return this.temp;
  }
  removeProduct(product:Product){
    const ind = this.products.indexOf(product);
    delete this.products[ind];
  }
}
