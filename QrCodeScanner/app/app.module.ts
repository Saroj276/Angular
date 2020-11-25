import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRScannerComponent } from './qrscanner/qrscanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    QRScannerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
