export interface IcoursesRes {
    payload: Icourses[]
  }
  
  export interface Icourses {
    id: number
    description: string
    iconUrl: string
    courseListIcon?: string
    longDescription: string
    category: "BEGINNER" | "ADVANCED"
    lessonsCount?: number
  }