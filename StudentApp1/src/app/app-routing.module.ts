import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { StudentInsertComponent } from './student-insert.component';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path: 'student-insert', component: StudentInsertComponent },
  { path: 'student-list', component:  StudentListComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
