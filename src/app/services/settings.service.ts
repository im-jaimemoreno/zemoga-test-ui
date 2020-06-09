import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { publicFigure } from "src/app/models/publicfigure";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  constructor(private _http:HttpClient) { }
  private handleError(errorResponse:HttpErrorResponse){
    let errorMessage = '';
    if (errorResponse.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${errorResponse.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${errorResponse.status}\nMessage: ${errorResponse.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  getGeneralSettings(){
    return this._http.get<any>("http://localhost:4210/generals");
  }
}
