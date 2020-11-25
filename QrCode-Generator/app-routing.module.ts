import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QRScannerComponent } from "./qrscanner/qrscanner.component";
import { HomeComponent } from "./home/home.component";
import { ResultComponent } from "./result/result.component";
import {  QrGeneratorComponent } from "./qr-generator/qr-generator.component";
import {  QrGenResultComponent } from "./qr-gen-result/qr-gen-result.component";
const routes: Routes = [
  {path:'qrCode', component:QRScannerComponent},
  {path:'scanResult', component:ResultComponent},
  {path:'', component:HomeComponent},
  {path:'qrGen', component:QrGeneratorComponent},
  {path:'genResult', component:QrGenResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
