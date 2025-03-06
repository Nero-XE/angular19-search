import { Component, input } from '@angular/core';
import { IData } from '../../app.interfaces';

@Component({
  selector: 'app-search-item',
  imports: [],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {
  public item = input<IData>();
}
