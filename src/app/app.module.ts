import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './user/composants/footer/footer.component';
import { HeaderComponent } from './user/composants/header/header.component';
import { AccueilComponent } from './user/pages/accueil/accueil.component';
import { BlogComponent } from './user/pages/blog/blog.component';
import { AproposComponent } from './user/pages/apropos/apropos.component';
import { FaqComponent } from './user/pages/faq/faq.component';
import { ContactComponent } from './user/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeaderComponent,
    BlogComponent,
    AccueilComponent,
    AproposComponent,
    FaqComponent,
    ContactComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
