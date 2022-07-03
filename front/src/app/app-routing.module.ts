import { RouterModule, Routes } from '@angular/router';

import { aboutus } from './Aboutus';
import { contactus } from './Contactus';
import { donaciones } from './Donaciones';
import { homepage } from './Home';
import { login } from './Login';
import { notFound } from './NotFound';
import { terms } from './Terms';

const routes: Routes = [
  { path: '', component: homepage},
  { path: 'aboutus', component: aboutus},
  { path: 'contactus', component: contactus},
  { path: 'donateus', component: donaciones},
  { path: 'login', component: login},
  { path: 'terms', component: terms},

  { path: '**', component: notFound}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
