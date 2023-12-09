import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilPorteurComponent } from './pages/profil-porteur/profil-porteur.component';
import { AproposComponent } from './user/pages/apropos/apropos.component';
import { PolitiquesComponent } from './user/pages/politiques/politiques.component';
import { ConditionsComponent } from './user/pages/conditions/conditions.component';

const routes: Routes = [
  { path: 'profilPorteur',component: ProfilPorteurComponent },
  {
    path: 'apropos' , component: AproposComponent
  },
  {
    path: 'politiques', component: PolitiquesComponent
  },
  {
    path: 'condition' , component: ConditionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
