import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiURL = "http://localhost:8000/api/commande/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
 constructor(private httpClient: HttpClient) { }


 createCommande(ing:any):Observable<Commande>{

  return this.httpClient.post<Commande>(this.apiURL, JSON.stringify(ing),this.httpOptions).pipe(
    catchError(this.errorHandler)
  )
}
readAll(): Observable<Commande[]>{
  return this.httpClient.get<Commande[]>(this.apiURL)
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
