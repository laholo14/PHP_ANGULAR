import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiURL = "http://localhost:8000/api/ingredient/";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private httpClient: HttpClient) { }


  createIngredient(ing:any):Observable<Ingredient>{

    return this.httpClient.post<Ingredient>(this.apiURL, JSON.stringify(ing),this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }


  readAll(): Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
   }

   readById(id:any): Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
   }




























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
