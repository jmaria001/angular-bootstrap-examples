import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { RouteGuardService } from './services/routeguard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: 'app', component: AppComponent, title: 'App' },
  { path: 'unauthorized', component: UnauthorizedComponent, title: 'Unauthorized' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'portal', component: PortalComponent, 'title': 'Portal', canActivate: [RouteGuardService], data: { Key: 'Portal' } },
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: '**', component: Page404Component, title: 'Page-404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
