import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourses, IcoursesRes } from '../model/course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  coursesurl: string = `${environment.courseUrl}/courses`
  private updatesubject$:Subject<boolean>=new Subject<boolean>()
  updatsubjectbeha:Observable<boolean>=this.updatesubject$.asObservable()
  constructor(private _https: HttpClient) { }

  fetchalldata(): Observable<Array<Icourses>> {
    return this._https.get<IcoursesRes>(this.coursesurl)
      .pipe(
        map((res) => {
          return res['payload']
        })

      )
  }

updatecourse(upcourse:Icourses):Observable<Icourses>{
  let updateUrl=`${this.coursesurl}/${upcourse.id}`
return  this._https.put<Icourses>(updateUrl,upcourse)
}
updatesubdata(couser:boolean){
  return this.updatesubject$.next(couser)
}

sinlecousergata(coursid:string):Observable<Icourses>{
let  singleUrl=`${this.coursesurl}/${coursid}`
 return this._https.get<Icourses>(singleUrl)
}


lessongetdata(){
   let lessourl=`${environment.courseUrl}/lessons`
   return this._https.get(lessourl)
}
}
