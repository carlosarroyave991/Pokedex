import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent},
  { path:'poke-detail/:id', component:PokeDetailComponent},
  { path:'**', redirectTo:'dashboard', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, PokeDetailComponent];
