import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';

export const routes: Routes = [
    //{path: '', component: ShopComponent},
    //{path: ':id', component: ProductDetailsComponent, data: {breadcrumb: {alias: 'productDetails'}}},
    {path: '', component: HomeComponent},
    {path: 'test-error', component: TestErrorComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: 'shop', loadComponent: () => import('./shop/shop.component').then(m => m.ShopComponent)},
    {path: 'shop/:id', loadComponent: () => import('./shop/product-details/product-details.component').then(m => m.ProductDetailsComponent)},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
