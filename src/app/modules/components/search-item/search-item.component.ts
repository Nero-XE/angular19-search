import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  imports: [],
  templateUrl: './search-item.component.html',
  styles: ``
})
export class SearchItemComponent {
  @Input() item: any
}
