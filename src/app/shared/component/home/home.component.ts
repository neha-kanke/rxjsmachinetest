import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Icourses } from '../../model/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy {
  fetchallarr !: Icourses[]
  advancedarr!: Icourses[]
  bignnerArr !: Icourses[]
  subcribeall !:Subscription
  constructor(private _couserservice: CourseService) { }
  ngOnDestroy(): void {
this.subcribeall.unsubscribe()
  }

  ngOnInit(): void {

    this.fetchcouserall()
    this._couserservice.updatsubjectbeha
      .subscribe(res => {
        if (res) {
          console.log(res);
          this.fetchcouserall()
        }
      })

  }




  fetchcouserall() {
 this.subcribeall=   this._couserservice.fetchalldata()
      .subscribe(res => {
        this.advancedarr = res.filter(avdc => avdc.category === "ADVANCED")
        this.bignnerArr = res.filter(biggc => biggc.category === 'BEGINNER')
      })
  }
}
