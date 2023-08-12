import { OverviewComponent } from '../overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SocialComponent } from '../social/social.component';
import { ExchangesComponent } from '../exchanges/exchanges.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {path: 'overview', component: OverviewComponent},
      {path: 'projectdetails', component: SocialComponent},
      {path: 'exchanges', component: ExchangesComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

