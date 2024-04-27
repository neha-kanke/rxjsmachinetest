import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Icourses } from '../../model/course';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  couserid !: string
  couserobj$ !: Observable<Icourses>
  lessonform !: FormGroup
  constructor(private _cousersservice: CourseService,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.couserid = this._routes.snapshot.params['id']
    this.couserobj$ = this._cousersservice.sinlecousergata(this.couserid)
    this.lessonform = new FormGroup({
      lessons: new FormControl(null, [Validators.required])
    })

    this._cousersservice.lessongetdata()
    .subscribe(res=>{
      console.log(res);
      
    })
  }
  

}
