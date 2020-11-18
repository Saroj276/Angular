import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { StudentInsertComponent } from './student-insert.component';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,AboutComponent,HomeComponent,ContactComponent,StudentInsertComponent,StudentComponent,StudentListComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,FormsModule,HttpClientModule, BrowserAnimationsModule,MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
