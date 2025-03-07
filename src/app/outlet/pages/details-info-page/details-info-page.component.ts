import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IData } from '../../../shared/shared.interfaces';
import dataJson from '../../../shared/shared.data.json'

@Component({
  selector: 'app-details-info-page',
  imports: [],
  templateUrl: 'details-info-page.component.html',
  styleUrl: './details-info-page.component.css'
})
export class DetailsInfoPageComponent {
  private router = inject(Router)

  public currentRoute = inject(ActivatedRoute)

  record: IData | undefined = {
    id: 0,
    header: '',
    description: '',
    mainText: ''
  }

  id: any

  constructor() {
    this.currentRoute.paramMap.subscribe((currentId) => {
      this.id = currentId.get('id')
    })

    if (this.id) {
      this.record = this.data.find(item => item.id === Number(this.id)); // Ищем запись в data по id
    }
  }

  data: IData[] = dataJson

  backToMain() {
    this.router.navigateByUrl('main')
  }
}
