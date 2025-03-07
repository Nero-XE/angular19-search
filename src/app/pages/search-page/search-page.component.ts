import { Component, signal, computed } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { SearchResultsComponent } from '../../components/search-results/search-results.component';
import { IData } from '../../app.interfaces';
import dataJson from '../../app.data.json';

@Component({
  selector: 'app-search-page',
  imports: [SearchInputComponent, SearchResultsComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  // Набор данных
  data: IData[] = dataJson

  // Поисковой запрос
  public searchQuery = signal<string>('');

  // Вычесляемый сигнал для фильтрации
  filteredData = computed(() => {
    const query = this.searchQuery().toLowerCase()

    return this.data.filter( item => 
      item.header.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    )
  })

  // Обновление значения запроса
  onSearchChange(term: string) {
    this.searchQuery.set(term);
  }
}
