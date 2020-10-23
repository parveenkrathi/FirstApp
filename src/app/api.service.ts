import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://dummy.restapiexample.com/api/v1";

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get(this.SERVER_URL+ '/employees');
  }
}
