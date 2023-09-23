import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RouteGuardService } from './services/routeguard.service';
import { FormsModule } from '@angular/forms';
import { HttpGeneralService } from './services/httpgeneral.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
    UnauthorizedComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RouteGuardService, 
    HttpGeneralService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
