import { Component } from '@angular/core';
import { AppUser } from './app.user';
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

  User: AppUser = { Login: '', Password: '', Email: '' }
  LoginValidate(param: AppUser): void {
    // this.cookieService.set("oauth", "32367tg", 1, "", "", true,)
    // this.cookieService.set("username", "32367tg", 1, "", "", true,)
    // this.cookieService.set("password", "32367tg", 1, "", "", true,)
    // this.co.app_IsLogged=true;
    // this._Router.navigateByUrl('/portal')

    // this.httpService.get('testeapi').subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   })
     let _data:string = "username=" ;
     _data+= this.Salt(param.Login)
        _data+="&password=";
        _data+=this.Salt(param.Password);
        _data += "&grant_type=password";
        _data += "&CallFrom=Browser";
    //let _data:string = 'username=622940076793866701621859365465&password=210415632408944162643067554748054504565638243055621399321798310037944304&grant_type=password&Cartv-Token=0&CallFrom=Browser';
    this.httpService.post("security/token", _data).subscribe(
      (response: any) => {
        if (response.access_token) {
          this.cookieService.set("oauth", response.access_token, 1, "", "", true,)
           this.co.app_IsLogged=true;
            this._Router.navigateByUrl('/portal');
        }
        else
        {
          console.log("login invalido");
        }
      });
  };

  Salt(key: string): string {
    let _byte1 = 0;
    let _byte2 = 0;
    let _byte3 = 0;
    let _byte4 = "";
    let _byte5 = "";
    for (let i = 0; i < key.length; i++) {
      _byte1 = parseInt(key.substr(i, 1).charCodeAt(0).toString())
      _byte2 = Math.floor((Math.random() * 700) + 1);
      _byte3 = _byte1 + _byte2;
      _byte4 += ('0000' + _byte3.toString()).slice(-3) + ('0000' + _byte2.toString()).slice(-3)
    }
    for (var x = 0; x < _byte4.length; x += 2) {
      _byte5 += _byte4.substr(x + 1, 1) + _byte4.substr(x, 1);
    }
    return _byte5;
  }
}
