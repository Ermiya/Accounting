import { ApplicantsRegistrationComponent } from './applicants-registration/applicants-registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { UserLoginComponent } from './passport/login/login.component';

const routes: Routes = [
  { path: 'passport/login', component: UserLoginComponent },
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    canActivateChild: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'dashboard/v1', pathMatch: 'full' },
      { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
      {
        path: 'applicants-register',
        loadChildren: () =>
          import('./applicants-registration/applicants-registration.module').then(m => m.ApplicantsRegistrationModule),
        canActivate: [SimpleGuard],
        canActivateChild: [SimpleGuard],
      },
    ],
  },

  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
