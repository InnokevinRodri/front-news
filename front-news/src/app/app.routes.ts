import { Routes } from '@angular/router';
import { News } from './news/news';
import { About } from './about/about';
import { Trending } from './trending/trending';
import { Categories } from './categories/categories';

export const routes: Routes = [
  { path: 'news', component: News },
  { path: 'trending', component: Trending },
  { path: 'categories', component: Categories },
  { path: 'about', component: About },
  { path: '', redirectTo: '/news', pathMatch: 'full' }
];
