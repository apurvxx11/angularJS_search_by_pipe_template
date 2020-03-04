import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'
import { SearchFormComponent }  from './search-form/search-form.component'

const routes: Routes = [
  { path: 'search-form', component: SearchFormComponent },
  { path: 'product-list', component: ProductListComponent},
  { path: '', redirectTo: '/product-list', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
