import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ProfileComponent } from './profile/profile';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'profile', component: ProfileComponent }
];