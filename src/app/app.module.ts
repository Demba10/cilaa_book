import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/pages/auth/register/register.component';
import { EspacePersonnelComponent } from './user/pages/espace-personnel/espace-personnel.component';
import { FooterComponent } from './user/composants/footer/footer.component';
import { AccueilComponent } from './user/pages/accueil/accueil.component';
import { BlogComponent } from './user/pages/blog/blog.component';
import { HeaderComponent } from './user/composants/header/header.component';
import { ProjetsComponent } from './user/pages/projets/projets.component';
import { DetailsProjetComponent } from './user/pages/details-projet/details-projet.component';
import { BailleurDetailsComponent } from './user/pages/bailleur-details/bailleur-details.component';
import { ProfilComponent } from './user/pages/profil/profil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LoginComponent } from './user/pages/auth/login/login.component';
import { ContactComponent } from './user/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EspacePersonnelComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    AccueilComponent,
    ProjetsComponent,
    DetailsProjetComponent,
    BailleurDetailsComponent,
    ProfilComponent,
    LoginComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
