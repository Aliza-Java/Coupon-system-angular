import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

    public updateErrorMessage:Subject<string>;

  constructor() {
      this.updateErrorMessage = new Subject<string>();
   }

  extractError(err:any):string{
      if(err.name==="HttpErrorResponse"){
          return "The server did not respond to our request. ";
      }

      if(err.message){
          if(err.message=="undefined"){
              return "(Details missing.)";
          }
          return err.message; 
      }
      return "There was on an unknown error on the server side.";
  }
}
