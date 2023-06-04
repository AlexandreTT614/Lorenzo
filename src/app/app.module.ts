import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes/notes.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImagesComponent } from './images/images.component';
import { ImageDisplayComponent } from './image-display/image-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DashboardComponent,
    ImagesComponent,
    ImageDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
