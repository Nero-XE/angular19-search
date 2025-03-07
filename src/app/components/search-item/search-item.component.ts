import { Component, inject, input } from '@angular/core';
import { IData } from '../../app.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  imports: [],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {
  private router = inject(Router)

  public item = input<IData>();

  moreDetails(id: number) {
    this.router.navigateByUrl(`details/${id}`)
  }
}
