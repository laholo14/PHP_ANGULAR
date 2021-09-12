import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Repas } from './repas';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  private apiURL = "http://localhost:8000/api/repas/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }


 createTest(repas:any):Observable<Repas>{

  return this.httpClient.post<Repas>(this.apiURL , JSON.stringify(repas),this.httpOptions)
  .pipe(
   catchError(this.errorHandler)
 )

}


 readAll(): Observable<Repas[]>{
  return this.httpClient.get<Repas[]>(this.apiURL)
  .pipe(
    catchError(this.errorHandler)
  )
 }




 readById(id:any):Observable<Repas>{
  return this.httpClient.get<Repas>(this.apiURL + id)
  .pipe(
    catchError(this.errorHandler)
  )
 }

//  update(id,repas) : Observable<Repas>{

//   return this.httpClient.post<Repas>(this.apiURL + id, JSON.stringify(repas),this.httpOptions)
//   .pipe(
//    catchError(this.errorHandler)
//  )

//  }

//  delete(id,repas) : Observable<Repas>{

//   return this.httpClient.post<Repas>(this.apiURL + id, JSON.stringify(repas),this.httpOptions)
//   .pipe(
//    catchError(this.errorHandler)
//  )

//  }




























 errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}


}
