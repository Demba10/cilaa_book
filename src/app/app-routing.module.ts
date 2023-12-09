import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './user/pages/projets/projets.component';
import { LoginComponent } from './user/pages/auth/login/login.component';
import { RegisterComponent } from './user/pages/auth/register/register.component';
import { EspacePersonnelComponent } from './user/pages/espace-personnel/espace-personnel.component';

const routes: Routes = [
  {
    path: 'projets', component: ProjetsComponent
  },
  {
    path: 'login', component: LoginComponent
  }, 
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'espace-personnel', component: EspacePersonnelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
