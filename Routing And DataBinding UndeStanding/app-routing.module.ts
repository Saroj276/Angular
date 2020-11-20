import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { DataBindingExpComponent } from "./data-binding-exp/data-binding-exp.component";
const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  {path:'dataBinding',component:DataBindingExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  static components = [ HomeComponent, FeatureComponent,DataBindingExpComponent ];

}
