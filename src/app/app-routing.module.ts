import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './user/pages/projets/projets.component';
import { LoginComponent } from './user/pages/auth/login/login.component';
import { RegisterComponent } from './user/pages/auth/register/register.component';
import { EspacePersonnelComponent } from './user/pages/espace-personnel/espace-personnel.component';
import { AccueilComponent } from './user/pages/accueil/accueil.component';
import { DetailsProjetComponent } from './user/pages/details-projet/details-projet.component';
import { BailleurDetailsComponent } from './user/pages/bailleur-details/bailleur-details.component';
import { ProfilComponent } from './user/pages/profil/profil.component';

const routes: Routes = [
  {
    path: 'projets', component: ProjetsComponent
  },
  {
    path: 'details', component: DetailsProjetComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'espace-personnel', component: EspacePersonnelComponent
  },
  {
    path: 'accueil', component: AccueilComponent
  },
  {
    path: 'bailleur-details', component: BailleurDetailsComponent
  },
  {
    path: 'profil', component: ProfilComponent
  },
  {
    path: '', redirectTo: 'accueil', pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
