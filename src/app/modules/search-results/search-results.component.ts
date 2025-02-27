import { Component, Input } from '@angular/core';
import { SearchItemComponent } from '../components/search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  imports: [SearchItemComponent],
  templateUrl: './search-results.component.html',
  styles: ``
})
export class SearchResultsComponent {
  @Input() data: any[] = [];
}
