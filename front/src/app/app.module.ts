import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { aboutus } from './Aboutus';
import { contactus } from './Contactus';
import { donaciones } from './Donaciones';
import { login } from './Login';
import { menu } from './Menu/menu';
import { terms } from './Terms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    aboutus,
    contactus,
    donaciones,
    login,
    menu,
    terms,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
