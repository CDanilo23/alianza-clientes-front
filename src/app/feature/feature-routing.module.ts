import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientComponent } from './users/home-client/home-client.component';

const routes: Routes = [
  {
    path: 'clients',
    component: HomeClientComponent,
    loadChildren: () => import('./users/clients.module').then(i => i.ClientsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
