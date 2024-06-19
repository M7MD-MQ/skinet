import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', loadComponent: () => import('./shop/shop.component').then(m => m.ShopComponent)},
    {path: 'shop/:id', loadComponent: () => import('./shop/product-details/product-details.component').then(m => m.ProductDetailsComponent)},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
