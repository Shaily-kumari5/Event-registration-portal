import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { EventRegistration } from './components/event-registration/event-registration';
import { ManageRecords } from './components/manage-records/manage-records';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'event-registration',
    component: EventRegistration
  },
  {
    path: 'manage-records',
    component: ManageRecords
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];