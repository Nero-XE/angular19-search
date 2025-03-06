import { Component, input } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import { IData } from '../../app.interfaces';

@Component({
  selector: 'app-search-results',
  imports: [SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultsComponent {
  public data = input<IData[]>();
}
