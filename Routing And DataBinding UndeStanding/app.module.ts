import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './shared/data.service';
import { DataBindingExpComponent } from './data-binding-exp/data-binding-exp.component';;
import {FormsModule} from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    HomeComponent,
    DataBindingExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
