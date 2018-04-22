import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { QueeroesComponent } from './queeroes/queeroes.component';
import { QueerDetailComponent } from './queer-detail/queer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    QueeroesComponent,
    QueerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
