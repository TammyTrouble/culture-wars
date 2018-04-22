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
import { QueerService } from './queer.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    QueeroesComponent,
    QueerDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    QueerService,
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
