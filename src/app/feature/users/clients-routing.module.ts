import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-clients/list-clients.component';

const routes: Routes = [
  { path: 'list', component: ListClientComponent },
  { path: '**', pathMatch: '**', redirectTo: '/clients/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {
}
