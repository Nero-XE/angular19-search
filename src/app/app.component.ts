import { Component, signal, computed } from '@angular/core';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { IData } from './app.interfaces';

@Component({
  selector: 'app-root',
  imports: [SearchInputComponent, SearchResultsComponent],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {
  // Набор данных
  public data: IData[] = [
    {
      header: 'Добро пожаловать',
      description: 'Надеюсь, у вас отличное настроение!',
    },
    {
      header: 'Справочные материалы',
      description: 'Изучите нашу документацию для более детальной информации.',
    },
    {
      header: 'Оставайтесь на связи',
      description: 'Подписывайтесь на наши обновления.',
    },
    {
      header: 'Специальные предложения',
      description: 'Не пропустите наши скидки и акции!',
    },
    {
      header: 'Поддержка клиентов',
      description:
        'Мы всегда рады помочь вам. Обратите внимание на раздел FAQ.',
    },
    {
      header: 'Наши услуги',
      description: 'Узнайте больше о наших продуктах и услугах.',
    },
    {
      header: 'Контактная информация',
      description: 'Свяжитесь с нами, если у вас есть вопросы.',
    },
    {
      header: 'Обновления',
      description: 'Посмотрите последние изменения в нашей системе.',
    },
    {
      header: 'Отзывы пользователей',
      description: 'Узнайте, что говорят о нас наши клиенты.',
    },
    {
      header: 'Команда',
      description: 'Познакомьтесь с нашей командой профессионалов.',
    },
    {
      header: 'Новости',
      description: 'Следите за последними новостями из нашей компании.',
    },
    {
      header: 'Вебинары',
      description: 'Записывайтесь на наши обучающие вебинары.',
    },
    {
      header: 'Промоакции',
      description: 'Не пропустите нашу специальную акцию этого месяца.',
    },
    { header: 'События', description: 'Узнайте о предстоящих событиях.' },
    {
      header: 'Часто задаваемые вопросы',
      description: 'Ответы на самые популярные вопросы клиентов.',
    },
    {
      header: 'Работа с нами',
      description: 'Расскажите о своих целях и мы поможем их достичь.',
    },
    { header: 'Партнеры', description: 'Познакомьтесь с нашими партнерами.' },
    {
      header: 'Кейсы',
      description: 'Примеры успешного использования наших продуктов.',
    },
    { header: 'Блог', description: 'Читать полезные статьи и советы.' },
    {
      header: 'Безопасность данных',
      description: 'Как мы защищаем ваши данные.',
    },
    {
      header: 'Политика конфиденциальности',
      description: 'Наши меры по защите вашей информации.',
    },
  ];

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
