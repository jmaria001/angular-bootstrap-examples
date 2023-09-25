import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  [x: string]: any;
  constructor(
    private cookieService: CookieService,
    private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        //this.app_CurrentRout="App" + event.url;
        this.SetCurrentRout(event.url);
      };
      if (event instanceof NavigationEnd) {

        //this.app_CurrentRout="App" + event.url;
        this.SetCurrentRout(event.url);
      };
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  };

  newCredential(): any {
    return {
      IsLogged: false,
      Cookie: "",
      UserLogin: "",
      UserName: "",
      UserEmail: "",
    }
  }
  app_CurrentRout:string= "";
  app_credential: any = this.newCredential();
  app_CanNavigate:boolean=true;
  ngOnInit(): void {

    if (this.app_credential.cookie) {
        this.app_credential.IsLogged = true;
    }
    else {
      this.router.navigateByUrl('/login')
    }
  }
  AppLogout(): void {
    this.app_credential = this.newCredential();
    this.cookieService.delete("oauth");
    this.router.navigateByUrl('/login')
  }

  SetCurrentRout(pRoute: String): void {
    this.app_CurrentRout = "App" + pRoute;
  }
}



