import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Additem } from './components/additem/additem';
import { Listitems } from './components/listitems/listitems';
import { About } from './components/about/about';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'additem', component: Additem },
    { path: 'listitems', component: Listitems },
    { path: 'about', component: About }
];

