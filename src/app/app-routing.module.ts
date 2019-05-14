import { DetailsProductComponent } from './components/details-product/details-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { LoginComponent } from './components/users/login/login.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/list-products', component: ListProductsComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'details-product', component: DetailsProductComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
