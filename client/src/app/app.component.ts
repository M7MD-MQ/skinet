import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
import { NgxSpinnerModule } from "ngx-spinner";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, NavBarComponent, ShopComponent, HomeComponent, SectionHeaderComponent, NgxSpinnerModule]
})

export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor() { }

  ngOnInit(): void {
  }

}

