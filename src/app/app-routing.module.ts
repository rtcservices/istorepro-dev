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
    path: 'transactions',
    loadChildren: () =>
      import('./features/transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
      component: AppShellComponent,
      canActivateChild: [AuthGuard]
  },
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
