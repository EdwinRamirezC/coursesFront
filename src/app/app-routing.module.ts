import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './components/courses/courses.component';


const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'courses' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
