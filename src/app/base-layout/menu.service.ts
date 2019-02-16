import { Injectable } from '@angular/core';
import { ModuleMenu} from './module-menu';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http: HttpClient) { }

  getMenusByModule(currentModule: string) {
    if(currentModule == "Employees")
    {
      const header = new HttpHeaders({
        "Name": "Encrypted Name"
      })
      const params = new HttpParams().append("param1", "ParamValue");
      //return this._http.get<ModuleMenu[]>("./assets/tmpdata/employeesmenu.json", {header: header, params: param})
      return this._http.get<ModuleMenu[]>("./assets/tmpdata/employeesmenu.json", {}).pipe(
        tap(data => console.log(JSON.stringify(data))),
        retry(2),
        catchError(this.handleError)
        
      );
    }
    else if(currentModule == "Report")
    {
      return this._http.get<ModuleMenu[]>("./assets/tmpdata/reportmenu.json").pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    else
    {
      return this._http.get<ModuleMenu[]>("./assets/tmpdata/homemenu.json").pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
