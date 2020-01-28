import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(private coursesService: CoursesService) {
    this.coursesService.getCourses().subscribe((data: any[]) => {
      this.courses = data['items'];
      console.log(this.courses);
    });
  }

  ngOnInit() {

  }


}
