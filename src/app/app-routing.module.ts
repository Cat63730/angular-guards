import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredComponent } from './secured/secured.component';
import { AuthGuard } from './core/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { IsConnectedGuard } from './core/is-connected.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { IsAdminGuard } from './core/is-admin.guard';

const routes: Routes = [
  { path: 'secured', component: SecuredComponent, canActivate: [AuthGuard] },
  { path:'admin', component: AdminPageComponent, canActivate: [IsAdminGuard]},
  { path:'dashboard', component:DashboardPageComponent, canActivate: [IsConnectedGuard] },
  { path:'home', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
