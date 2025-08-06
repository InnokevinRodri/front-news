import { Routes } from '@angular/router';
import { News } from './news/news';
import { About } from './about/about';

export const routes: Routes = [
  { path: 'news', component: News },
  { path: 'about', component: About },
  { path: '', redirectTo: '/news', pathMatch: 'full' }
];
