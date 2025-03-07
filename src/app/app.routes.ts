import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailsInfoPageComponent } from './pages/details-info-page/details-info-page.component';

export const routes: Routes = [
    {
        path: '*',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: SearchPageComponent
    },
    {
        path: 'details/:id',
        component: DetailsInfoPageComponent
    }
];
