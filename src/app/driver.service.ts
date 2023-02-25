import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Driver } from './driver';
import { Guid } from 'guid-typescript';
  
@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  private apiURL = "https://localhost:7044";
    
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
    
  /**
   Get All Driver 
   */
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/Driver/GetAllDriver/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   Create Driver
   */
  create(Driver:Driver): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/Driver/Add', JSON.stringify(Driver), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  /**
  Find One Driver By Id
   */
  find(id:Guid): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/Driver/GetDriverById?id=' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   Update One Driver
   */
  update(id:Guid, Driver:Driver): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/Driver/Update', JSON.stringify(Driver), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  /**
   delete One Driver By Id
   */
  delete(id:Guid){
    return this.httpClient.get(this.apiURL + '/Driver/Delete?Id=' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
  Errors
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}