import { Component } from '@angular/core';
import { AppUser } from '../app.user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpGeneralService } from '../services/httpgeneral.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private cookieService: CookieService,
    private _Router: Router, private co: AppComponent,
    private httpService: HttpGeneralService) {
  }

  User: AppUser = { Login: 'Jmaria', Password: 'bnbnbn', Email: 'joao_maria001@hotmail.com' }
  LoginValidate(param: AppUser): void {
    // this.cookieService.set("oauth", "32367tg", 1, "", "", true,)
    // this.cookieService.set("username", "32367tg", 1, "", "", true,)
    // this.cookieService.set("password", "32367tg", 1, "", "", true,)
    // this.co.app_IsLogged=true;
    // this._Router.navigateByUrl('/portal')

    this.httpService.get('testeapi').subscribe(
      (data: any) => {
        console.log(data);
     })
    let url = "security/token";
    let body = {
      username: 'suporte@cartv.com.br',
      password: 'bozo',
      grant_type: 'password'
    };
    //let _data = "username=" + body.username + "&password=" + body.password + "&grant_type=password" + "&CallFrom=Browser";
    let _data = "username=832709121111521234621385165660&password=843277443592521695810607121941665817510274010250644730343798165255343077&grant_type=password&Cartv-Token=0&CallFrom=Browser"
    this.httpService.post(url,_data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }
}