import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QRScannerComponent } from "./qrscanner/qrscanner.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  {path:'qrCode', component:QRScannerComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
