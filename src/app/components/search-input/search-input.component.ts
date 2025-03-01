import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styles: ``,
})
export class SearchInputComponent {
  public searchInput = signal<string>('');

  public searchChange = output<string>();

  onSearchChange() {
    this.searchChange.emit(this.searchInput());
  }
}
