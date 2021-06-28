import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { AppShellComponent } from './core/shells/app-shell/app-shell.component';
import { AuthShellComponent } from './core/shells/auth-shell/auth-shell.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
    component: AuthShellComponent
  },
  {
    path: 'setup',
    loadChildren: () =>
      import('./features/setup/setup.module').then((m) => m.SetupModule),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'base',
    loadChildren: () =>
      import('./features/base/base.module').then((m) => m.BaseModule),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'operations',
    loadChildren: () =>
      import('./features/operations/operations.module').then(
        (m) => m.OperationsModule
      ),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'scans',
    loadChildren: () =>
      import('./features/scans/scans.module').then((m) => m.ScansModule),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'routines',
    loadChildren: () =>
      import('./features/routines/routines.module').then(
        (m) => m.RoutinesModule
      ),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'query',
    loadChildren: () =>
      import('./features/query/query.module').then((m) => m.QueryModule),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'dashboards',
    loadChildren: () =>
      import('./features/dashboards/dashboards.module').then(
        (m) => m.DashboardsModule
      ),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  { path: '', redirectTo: 'setup', pathMatch: 'full' },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    component: AppShellComponent,
    canActivateChild: [AuthGuard]
  },
  {
    path: 'user-account',
    loadChildren: () =>
      import('./features/user-account/user-account.module').then(
        (m) => m.UserAccountModule
      ),
      component: AppShellComponent,
      canActivateChild: [AuthGuard]
  },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
