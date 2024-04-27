import { Component, Inject, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icourses } from '../../model/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  updatedata !: Icourses
  courseform !: FormGroup
  constructor(private cousersservice: CourseService,
    @Inject(MAT_DIALOG_DATA) private getdata: Icourses,
    private matdiloref: MatDialogRef<CourseFormComponent>,
    private fb: FormBuilder
  ) {
    this.createcourseform()
    this.updatedata = getdata
    this.courseform.patchValue(getdata)
  }

  ngOnInit(): void {
  }

  createcourseform() {
    this.courseform = this.fb.group({
      description: ['', Validators.required],
      category: ['', Validators .required],
      releaseAt: ['', Validators.required],
      longDescription: ['', Validators.required],
    })
  }
  savedata() {
    if (this.courseform.valid) {
      let edidata = { ...this.courseform.value, id: this.updatedata.id }
      this.cousersservice.updatecourse(edidata)
        .subscribe(res => {
          console.log(res);
          this.cousersservice.updatesubdata(true)
          this.matdiloref.close(edidata)
         
        })
    }
  }
}
