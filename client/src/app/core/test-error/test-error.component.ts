import { Component } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {
  baseURL = environment.apiUrl
  validationErrors: string[] = [];

  constructor(private http: HttpClient) {}

  get404Error(){
    this.http.get(this.baseURL + 'product/42').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get500Error(){
    this.http.get(this.baseURL + 'buggy/servererror').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400Error(){
    this.http.get(this.baseURL + 'buggy/badrequest').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400ValidationError(){
    this.http.get(this.baseURL + 'product/fortytwo').subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors = error.errors;
      }
    })
  }

}
