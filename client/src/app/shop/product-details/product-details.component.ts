import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import {BreadcrumbService } from 'xng-breadcrumb';
import { ShopComponent } from '../shop.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@productDetails', ' ')
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name)
      },
      error: error => console.log(error)
    })
  }
}