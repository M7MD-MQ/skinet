import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from './models/product';
import { Pagination } from './models/pagination';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, NavBarComponent]
})

export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];
  constructor(private http: HttpClient) { }

  // To get data from our API as Observable (stream of data that requied subscribe "listening" to catch).
  ngOnInit(): void {
    this.http.get<Pagination<Product>>("https://localhost:5001/api/products?pageSize=50").subscribe({
      next: (response: any) => this.products = response.data, //what to do next.
      error: error => console.error(error), //what to do if there is an error.
      complete: () => {
        console.log('request completed');
        console.log('extra statment');
      }
      
    })
  }

}
