import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ImagesComponent } from './images/images.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [

    
    { path: 'details', component: ImageDisplayComponent},
    { path: 'images', component: ImagesComponent},
    { path: 'notes', component: NotesComponent}

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
  
  
  })

export class AppRoutingModule { }