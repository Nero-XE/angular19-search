import { Component, input } from '@angular/core';
import { IData } from '../../app.interfaces';

@Component({
  selector: 'app-search-item',
  imports: [],
  templateUrl: './search-item.component.html',
  styles: ``,
})
export class SearchItemComponent {
  public item = input<IData>();
}
