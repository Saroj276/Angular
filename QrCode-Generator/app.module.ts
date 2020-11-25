import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRScannerComponent } from './qrscanner/qrscanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { QrGenResultComponent } from './qr-gen-result/qr-gen-result.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    QRScannerComponent,
    HomeComponent,
    ResultComponent,
    QrGeneratorComponent,
    QrGenResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ZXingScannerModule,QRCodeModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
