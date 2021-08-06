import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'ingresar', pathMatch: 'full'},
  { path: 'ingresar', component: LoginComponent },
  { path: 'usuarios', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
