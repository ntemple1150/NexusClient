import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employer } from "../models/employer.model";
import { Observable } from "rxjs"

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": sessionStorage.getItem("token")
  })
}


@Injectable()
export class EmployerService {
  constructor(private http: HttpClient) { }

  register(employer: object): Observable<Employer> {
    return this.http.post<Employer>("https://nexuserver.herokuapp.com/business/signup", employer)
  }

  login(employer: object): Observable<Employer> {
    return this.http.post<Employer>("https://nexuserver.herokuapp.com/business/signin", employer)
  }

  get(id: string): Observable<Employer> {
    return this.http.get<Employer>(`https://nexuserver.herokuapp.com/business/${id}`, httpOptions)
  }

}