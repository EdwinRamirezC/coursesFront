import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { StarRatingComponent } from 'ng-starrating';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  nextUrl: string = null;
  notEmpyCourses = true;
  notScrolly = true;

  constructor(private coursesService: CoursesService, private spinner: NgxSpinnerService) {
    this.coursesService.getCourses().subscribe((data: any[]) => {
      this.courses = data['items'];
      this.nextUrl = data['nextUrl'];
    });
  }

  ngOnInit() {}
  // star rating
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  // function to call the next courses and add it to actual courses
  getNextData(){
    if(this.nextUrl){
      this.coursesService.getNextCourses(this.nextUrl).subscribe((data: any[]) => {
        this.nextUrl = data['nextUrl'];
        this.spinner.hide();
        if(!this.nextUrl ){
          this.notEmpyCourses = false;
        }
        this.courses =  this.courses.concat(data['items']);
        this.notScrolly = true;
      });
    }
  }
  // Function to called by the infinity scroll
  onScroll(){
    this.getNextData();
    if(this.notScrolly && this.notEmpyCourses){
      this.spinner.show();
      this.notScrolly = false;
    }else if(!this.notEmpyCourses){
      this.spinner.hide();
    }
  }
}
