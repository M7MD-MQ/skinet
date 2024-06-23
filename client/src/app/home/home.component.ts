import { Component } from '@angular/core';
import {
  NguCarousel,
  NguCarouselDefDirective,
  NguCarouselNextDirective,
  NguCarouselPrevDirective,
  NguItemComponent
} from '@ngu/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NguCarousel, NguCarouselDefDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
