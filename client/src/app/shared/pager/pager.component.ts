import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent {
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  @Input() pageIndex?: number;
  @Output() page = new EventEmitter<number>();

  onPagerChanged(event: any) {
    this.page.emit(event.page);
  }

}
