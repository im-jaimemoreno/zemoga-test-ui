import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { publicFigure } from "src/app/models/publicfigure";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
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
  getAllPublicFigures(){
    return this._http.get<publicFigure[]>("http://localhost:4210/rules-thumbs?isCover=false");
  }
  getCoverPublicFigure(){
    return this._http.get<publicFigure[]>("http://localhost:4210/rules-thumbs?isCover=true");
  }
  getPublicFigure(id:number){
    return this._http.get<publicFigure>(`http://localhost:4210/rules-thumbs/`+id);
  }
  voteForPublicFigure(person:publicFigure):Observable<void>{
    console.log(person);
    return this._http.put<void>("http://localhost:4210/rules-thumbs/"+person.id, person, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
    })
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

}
