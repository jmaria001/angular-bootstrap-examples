import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationStart,NavigationEnd} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private cookieService: CookieService,
    private router: Router) {
      router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
          //this.app_CurrentRout="App" + event.url;
          this.SetCurrentRout(event.url);
        };
        if(event instanceof NavigationEnd) {

          //this.app_CurrentRout="App" + event.url;
          this.SetCurrentRout(event.url);
        };
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
  };


  app_IsLogged: boolean = false;
  app_Cookie: String = "";
  app_CurrentRout:String = "";
  app_CanNavigate:boolean = true;
  ngOnInit(): void {
  
    this.app_Cookie = this.cookieService.get("oauth");
    if (this.app_Cookie) {
      this.app_IsLogged = true
    }
    else {
      this.router.navigateByUrl('/login')
    }
  }
  AppLogout():void{
    this.app_IsLogged = false;
    this.cookieService.delete("oauth");
    this.router.navigateByUrl('/login')
  }

  SetCurrentRout(pRoute:String):void{
    this.app_CurrentRout="App" + pRoute;
  }
}



