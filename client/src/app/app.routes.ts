import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [{
    path: '',
    component: HomeComponent
},
{
    path: 'map',
    loadComponent: () => import('./map/map.component').then(c => c.MapComponent)
},
{
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
},
]
