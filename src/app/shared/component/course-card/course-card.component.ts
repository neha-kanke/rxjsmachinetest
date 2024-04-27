import { Component, Input, OnInit } from '@angular/core';
import { Icourses } from '../../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() couserobj !: Icourses
  constructor(private _matdilog: MatDialog) { }

  ngOnInit(): void {
  }
  editcourse() {
    let matdilogcong = new MatDialogConfig
    matdilogcong.width = '500px'
    matdilogcong.data = this.couserobj
    matdilogcong.disableClose = false
    matdilogcong.autoFocus = false
    let matdilogref = this._matdilog.open(CourseFormComponent, matdilogcong)
    matdilogref.afterClosed()
      .subscribe((res:Icourses) => {
        this.couserobj = res
      })
  }
}
