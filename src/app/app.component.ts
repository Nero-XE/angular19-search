import { Component } from '@angular/core';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultsComponent } from './modules/search-results/search-results.component';

@Component({
  selector: 'app-root',
  imports: [SearchInputComponent, SearchResultsComponent],
  templateUrl: './app.component.html',
  styles: ``
})
export class AppComponent {
  public data = [
    { header: "Добро пожаловать", description: "Надеюсь, у вас отличное настроение!" },
    { header: "Справочные материалы", description: "Изучите нашу документацию для более детальной информации." },
    { header: "Оставайтесь на связи", description: "Подписывайтесь на наши обновления." },
    { header: "Специальные предложения", description: "Не пропустите наши скидки и акции!" },
    { header: "Поддержка клиентов", description: "Мы всегда рады помочь вам. Обратите внимание на раздел FAQ." },
    { header: "Наши услуги", description: "Узнайте больше о наших продуктах и услугах." },
    { header: "Контактная информация", description: "Свяжитесь с нами, если у вас есть вопросы." },
    { header: "Обновления", description: "Посмотрите последние изменения в нашей системе." },
    { header: "Отзывы пользователей", description: "Узнайте, что говорят о нас наши клиенты." },
    { header: "Команда", description: "Познакомьтесь с нашей командой профессионалов." },
    { header: "Новости", description: "Следите за последними новостями из нашей компании." },
    { header: "Вебинары", description: "Записывайтесь на наши обучающие вебинары." },
    { header: "Промоакции", description: "Не пропустите нашу специальную акцию этого месяца." },
    { header: "События", description: "Узнайте о предстоящих событиях." },
    { header: "Часто задаваемые вопросы", description: "Ответы на самые популярные вопросы клиентов." },
    { header: "Работа с нами", description: "Расскажите о своих целях и мы поможем их достичь." },
    { header: "Партнеры", description: "Познакомьтесь с нашими партнерами." },
    { header: "Кейсы", description: "Примеры успешного использования наших продуктов." },
    { header: "Блог", description: "Читать полезные статьи и советы." },
    { header: "Безопасность данных", description: "Как мы защищаем ваши данные." },
    { header: "Политика конфиденциальности", description: "Наши меры по защите вашей информации." },
  ];  

  public searchQuery: string = '';

  get filteredData() {
    return this.data.filter(item => 
      item.header.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSearchChange(term: string) {
    this.searchQuery = term;
  }
}