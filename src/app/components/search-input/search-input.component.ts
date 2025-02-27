import { Component, Output, signal, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent {
  public searchInput = signal("")

  @Output() searchChange: EventEmitter<string> = new EventEmitter()
  
  onSearchChange() {
    this.searchChange.emit(this.searchInput());
  }
}
