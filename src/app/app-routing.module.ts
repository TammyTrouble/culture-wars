import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueeroesComponent } from './queeroes/queeroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueerDetailComponent } from './queer-detail/queer-detail.component';
import { CreateComponent } from './create/create.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
	{ path: 'queeroes', component: QueeroesComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'detail/:id', component: QueerDetailComponent },
	{ path: 'create', component: CreateComponent },
	{ path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
