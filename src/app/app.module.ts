import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilPorteurComponent } from './pages/profil-porteur/profil-porteur.component';
import { HeaderComponent } from './user/composants/header/header.component';
import { AproposComponent } from './user/pages/apropos/apropos.component';
import { PolitiquesComponent } from './user/pages/politiques/politiques.component';
import { ConditionsComponent } from './user/pages/conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilPorteurComponent,
    HeaderComponent,
    AproposComponent,
    PolitiquesComponent,
    ConditionsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
