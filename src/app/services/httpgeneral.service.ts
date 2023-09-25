import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class HttpGeneralService {
  url: string;
  constructor(private  http: HttpClient,
    private  cookie:CookieService) {
    this.url = environment.apiRoute;
  }
  post(apiRoute: string, body: any) {
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(`${this.url + apiRoute}`, body, { headers: headers });
  }

  get(apiRoute: string) {
    let oAutCookie:string = this.cookie.get("oauth")
    const headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + oAutCookie
    }
      return this.http.get(`${this.url + apiRoute}`, { headers: headers });
  }

  put(apiRoute: string, body: any) {
    return this.http.put(`${this.url + apiRoute}`, body, { headers: this.getHttpHeaders() });
  }

  delete(apiRoute: string) {
    return this.http.delete(`${this.url + apiRoute}`, { headers: this.getHttpHeaders() });
  }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set("key", "value");
  }
}