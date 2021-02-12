import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

/* Importação dos módulos do Material Design */
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* Qualquer módulo que for usar dentro de outro módulo é necessário declarar dentro 
       dos imports. */
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  /* Está definindo qual componente será inicializado primeiramente junto com a aplicação. */
  bootstrap: [AppComponent]
})
export class AppModule { }
