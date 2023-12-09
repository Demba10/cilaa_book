import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/pages/auth/register/register.component';
import { EspacePersonnelComponent } from './user/pages/espace-personnel/espace-personnel.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EspacePersonnelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
