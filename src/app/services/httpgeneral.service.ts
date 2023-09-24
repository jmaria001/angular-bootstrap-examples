import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGeneralService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.apiRoute;
  }

  post(apiRoute: string, body: any) {
  

  const head = new HttpHeaders()
  //.add('Content-Type','x-www-form-urlencoded')
  //.append('CallFrom', 'Browser');7

    
    //return this.http.post(`${this.url + apiRoute}`, body, { headers: this.getHttpHeaders() });
    //return this.http.post(`${this.url + apiRoute}`, body, { headers:head });
    return this.http.post(`${this.url + apiRoute}`, body);
  }

  get(apiRoute: string) {
    // return this.http.get(`${this.url + apiRoute}`, { headers: this.getHttpHeaders() });
    return this.http.get(`${this.url + apiRoute}`);
  }

  put(apiRoute: string, body: any) {
    return this.http.put(`${this.url + apiRoute}`, body, { headers: this.getHttpHeaders() });
  }

  delete(apiRoute: string) {
    return this.http.delete(`${this.url + apiRoute}`, { headers: this.getHttpHeaders() });
  }

  getHttpHeaders(): HttpHeaders {
    //return new HttpHeaders().set("key", "value");
    //let head:HttpHeaders= new HttpHeaders();
    //head.append("CallFrom","Browser")
    //head.append("Content-Type","x-www-form-urlencoded")
    //return new HttpHeaders().set("Content-Type", "x-www-form-urlencoded");
    return new HttpHeaders().append("teste 1","value21");
    
    //return head;
  }
}