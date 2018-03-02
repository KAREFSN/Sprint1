import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full'
      },
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
